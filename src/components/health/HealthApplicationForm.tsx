
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuthStore } from '@/store/authStore';
import { supabase } from '@/integrations/supabase/client';
import { Heart, Send, FileText, Upload } from 'lucide-react';
import { toast } from 'sonner';

interface HealthScheme {
  id: string;
  name: string;
  category: string;
  description: string;
  highlight: string | null;
  eligibility: string[] | null;
  benefits: string[] | null;
  required_documents: string[] | null;
  form_fields: any;
  funding_amount: string | null;
  target_community: string | null;
  external_link: string | null;
  is_application_enabled: boolean | null;
  is_info_only: boolean | null;
  status_stages: string[] | null;
}

interface HealthApplicationFormProps {
  scheme: HealthScheme;
  onClose: () => void;
}

export const HealthApplicationForm = ({ scheme, onClose }: HealthApplicationFormProps) => {
  const [applicationData, setApplicationData] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuthStore();

  const formFields = scheme.form_fields || {};

  const handleInputChange = (fieldName: string, value: string) => {
    setApplicationData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleFileUpload = (fieldName: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setApplicationData(prev => ({
        ...prev,
        [fieldName]: file.name
      }));
      toast.success('Document uploaded successfully');
    }
  };

  const renderFormField = (fieldName: string, fieldConfig: any) => {
    const { type, required, label, options } = fieldConfig;

    switch (type) {
      case 'text':
      case 'tel':
      case 'email':
        return (
          <div key={fieldName} className="space-y-2">
            <Label htmlFor={fieldName}>
              {label} {required && <span className="text-red-500">*</span>}
            </Label>
            <Input
              id={fieldName}
              type={type}
              value={applicationData[fieldName] || ''}
              onChange={(e) => handleInputChange(fieldName, e.target.value)}
              placeholder={`Enter ${label.toLowerCase()}`}
              required={required}
            />
          </div>
        );

      case 'number':
        return (
          <div key={fieldName} className="space-y-2">
            <Label htmlFor={fieldName}>
              {label} {required && <span className="text-red-500">*</span>}
            </Label>
            <Input
              id={fieldName}
              type="number"
              value={applicationData[fieldName] || ''}
              onChange={(e) => handleInputChange(fieldName, e.target.value)}
              placeholder={`Enter ${label.toLowerCase()}`}
              required={required}
            />
          </div>
        );

      case 'date':
        return (
          <div key={fieldName} className="space-y-2">
            <Label htmlFor={fieldName}>
              {label} {required && <span className="text-red-500">*</span>}
            </Label>
            <Input
              id={fieldName}
              type="date"
              value={applicationData[fieldName] || ''}
              onChange={(e) => handleInputChange(fieldName, e.target.value)}
              required={required}
            />
          </div>
        );

      case 'select':
        return (
          <div key={fieldName} className="space-y-2">
            <Label htmlFor={fieldName}>
              {label} {required && <span className="text-red-500">*</span>}
            </Label>
            <Select
              value={applicationData[fieldName] || ''}
              onValueChange={(value) => handleInputChange(fieldName, value)}
              required={required}
            >
              <SelectTrigger>
                <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
              </SelectTrigger>
              <SelectContent>
                {options?.map((option: string) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );

      case 'textarea':
        return (
          <div key={fieldName} className="space-y-2">
            <Label htmlFor={fieldName}>
              {label} {required && <span className="text-red-500">*</span>}
            </Label>
            <Textarea
              id={fieldName}
              value={applicationData[fieldName] || ''}
              onChange={(e) => handleInputChange(fieldName, e.target.value)}
              placeholder={`Enter ${label.toLowerCase()}`}
              required={required}
              rows={3}
            />
          </div>
        );

      case 'file':
        return (
          <div key={fieldName} className="space-y-2">
            <Label htmlFor={fieldName}>
              {label} {required && <span className="text-red-500">*</span>}
            </Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <input
                type="file"
                id={fieldName}
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFileUpload(fieldName, e)}
                required={required}
              />
              <label htmlFor={fieldName} className="cursor-pointer">
                <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  Click to upload {label.toLowerCase()}
                </p>
                {applicationData[fieldName] && (
                  <p className="text-sm text-green-600 mt-2">
                    ✓ {applicationData[fieldName]}
                  </p>
                )}
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const handleSubmitApplication = async () => {
    if (!user) {
      toast.error('Please login to submit application');
      return;
    }

    // Validate required fields
    const requiredFields = Object.entries(formFields)
      .filter(([_, config]: [string, any]) => config.required)
      .map(([fieldName, _]) => fieldName);

    const missingFields = requiredFields.filter(field => !applicationData[field]);

    if (missingFields.length > 0) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('health_applications')
        .insert({
          user_id: user.id,
          scheme_id: scheme.id,
          application_data: applicationData
        });

      if (error) throw error;

      toast.success(`Application submitted successfully! Reference ID: HA${Date.now()}`);
      onClose();
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <Heart className="w-6 h-6 mr-2 text-orange-600" />
            Apply for {scheme.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-orange-700">Application Form</CardTitle>
              <p className="text-gray-600">Fill in your details to apply for this health scheme</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(formFields).map(([fieldName, fieldConfig]) =>
                  renderFormField(fieldName, fieldConfig)
                )}
              </div>

              <Button 
                className="w-full bg-orange-600 hover:bg-orange-700 py-6 text-lg"
                disabled={isSubmitting}
                onClick={handleSubmitApplication}
              >
                {isSubmitting ? (
                  <>
                    <FileText className="w-5 h-5 mr-2 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {scheme.required_documents && scheme.required_documents.length > 0 && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Required Documents</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {scheme.required_documents.map((document, index) => (
                  <li key={index}>• {document}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
