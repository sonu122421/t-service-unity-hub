
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Heart, 
  FileText, 
  CheckCircle, 
  Users, 
  CreditCard, 
  ExternalLink,
  ArrowRight
} from 'lucide-react';

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

interface HealthSchemeModalProps {
  scheme: HealthScheme;
  onClose: () => void;
  onApply: () => void;
}

export const HealthSchemeModal = ({ scheme, onClose, onApply }: HealthSchemeModalProps) => {
  const handleApplyClick = () => {
    if (scheme.external_link) {
      window.open(scheme.external_link, '_blank');
    } else if (scheme.is_application_enabled && !scheme.is_info_only) {
      onApply();
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <Heart className="w-6 h-6 mr-2 text-orange-600" />
            {scheme.name}
          </DialogTitle>
          <div className="flex items-center space-x-2 mt-2">
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              {scheme.category}
            </Badge>
            {scheme.target_community && (
              <Badge variant="outline" className="border-orange-200 text-orange-600">
                {scheme.target_community}
              </Badge>
            )}
          </div>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          {/* Highlight Section */}
          {scheme.highlight && (
            <Card>
              <CardContent className="pt-6">
                <div className="bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <CreditCard className="w-5 h-5 text-orange-600 mr-2" />
                    <span className="font-semibold text-orange-800">{scheme.highlight}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-orange-700 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                About This Scheme
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{scheme.description}</p>
              {scheme.funding_amount && (
                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <span className="text-green-800 font-semibold">
                    Financial Support: {scheme.funding_amount}
                  </span>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Eligibility */}
            {scheme.eligibility && scheme.eligibility.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-orange-700 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Eligibility Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {scheme.eligibility.map((criterion, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Benefits */}
            {scheme.benefits && scheme.benefits.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-orange-700 flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {scheme.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Required Documents */}
          {scheme.required_documents && scheme.required_documents.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-orange-700 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-2">
                  {scheme.required_documents.map((document, index) => (
                    <div key={index} className="flex items-center p-2 bg-gray-50 rounded">
                      <FileText className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-gray-700 text-sm">{document}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Application Process */}
          {scheme.status_stages && scheme.status_stages.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-orange-700">Application Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {scheme.status_stages.map((stage, index) => (
                    <div key={index} className="flex items-center">
                      <Badge variant="outline" className="text-xs">
                        {index + 1}. {stage}
                      </Badge>
                      {index < scheme.status_stages!.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-gray-400 mx-1" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            {scheme.external_link ? (
              <Button 
                className="flex-1 bg-orange-600 hover:bg-orange-700 py-6 text-lg"
                onClick={handleApplyClick}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Official Portal
              </Button>
            ) : scheme.is_application_enabled && !scheme.is_info_only ? (
              <Button 
                className="flex-1 bg-orange-600 hover:bg-orange-700 py-6 text-lg"
                onClick={handleApplyClick}
              >
                <FileText className="w-5 h-5 mr-2" />
                Apply Now
              </Button>
            ) : (
              <div className="flex-1 p-4 bg-gray-100 rounded-lg text-center">
                <p className="text-gray-600">
                  {scheme.is_info_only ? 
                    'This is an informational scheme. Contact relevant authorities for more details.' :
                    'Applications are currently not available for this scheme.'
                  }
                </p>
              </div>
            )}
            
            <Button variant="outline" onClick={onClose} className="px-8">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
