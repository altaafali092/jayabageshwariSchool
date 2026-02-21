import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { AdmissionQuery } from '@/types/admin/AdmissionQuery';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, User, Users, GraduationCap, ClipboardList, Paperclip, Mail, Phone, MapPin, Calendar, Globe } from 'lucide-react';
import { index } from '@/routes/admin/admission-query';

const formatDate = (dateString: string) => {
    try {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(dateString));
    } catch (e) {
        return dateString;
    }
};

interface Props {
    admissionQuery: AdmissionQuery;
    grades: Record<string, string>;
    genders: Record<string, string>;
}

export default function Show({ admissionQuery, grades, genders }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Admission Queries',
            href: index().url,
        },
        {
            title: 'Admission Query Details',
            href: '#',
        },
    ];
    const handleCancel = () => window.history.back()


    const DetailItem = ({ icon: Icon, label, value, className = "" }: { icon: any, label: string, value: React.ReactNode, className?: string }) => (
        <div className={`space-y-1.5 ${className}`}>
            <div className="flex items-center gap-2 text-muted-foreground uppercase tracking-wider text-[10px] font-bold">
                <Icon className="w-3.5 h-3.5" />
                <span>{label}</span>
            </div>
            <div className="text-sm font-semibold text-foreground">
                {value || <span className="text-muted-foreground/50 italic text-xs">Not Provided</span>}
            </div>
        </div>
    );

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Admission Query - ${admissionQuery.full_name}`} />

            <div className="flex flex-col gap-6 p-4 md:p-8 max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h1 className="text-2xl font-black tracking-tighter uppercase  text-foreground flex items-center gap-3">
                            <span className="text-black">APPLY</span> DETAILS
                        </h1>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                            Submitted on {admissionQuery.created_at ? formatDate(admissionQuery.created_at) : 'N/A'}
                        </p>
                    </div>
                    <Button onClick={handleCancel} variant="outline" size="sm" className="rounded-full font-bold uppercase tracking-widest text-[10px] gap-2">

                        <ArrowLeft className="w-3.5 h-3.5" />
                        Return to List

                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Student Identity Card */}
                    <Card className="lg:col-span-2 shadow-sm border-muted/40 overflow-hidden">
                        <CardHeader className="bg-muted/30 border-b border-muted/40 py-4">
                            <CardTitle className="text-sm font-black uppercase tracking-[0.2em] flex items-center gap-3 italic">
                                <User className="w-4 h-4 text-black" />
                                Student Identity
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                <DetailItem icon={User} label="Full Name" value={admissionQuery.full_name} className="md:col-span-2 text-lg" />
                                <DetailItem icon={Calendar} label="Date of Birth" value={admissionQuery.date_of_birth ? formatDate(admissionQuery.date_of_birth) : null} />
                                <DetailItem icon={Users} label="Gender" value={genders[admissionQuery.gender] || admissionQuery.gender} />
                                <DetailItem icon={GraduationCap} label="Grade Applying For" value={grades[admissionQuery.grade_applying_for] || admissionQuery.grade_applying_for} />
                                <DetailItem icon={Globe} label="Nationality" value={admissionQuery.nationality} />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contact Overview */}
                    <Card className="shadow-sm border-muted/40">
                        <CardHeader className="bg-muted/30 border-b border-muted/40 py-4">
                            <CardTitle className="text-sm font-black uppercase tracking-[0.2em] flex items-center gap-3 italic text-black">
                                <Phone className="w-4 h-4" />
                                Contact Info
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 space-y-8">
                            <DetailItem icon={Phone} label="Parent Phone" value={admissionQuery.parent_phone} />
                            <DetailItem icon={Mail} label="Parent Email" value={admissionQuery.parent_email} />
                            <DetailItem icon={MapPin} label="Permanent Address" value={admissionQuery.parent_address} />
                        </CardContent>
                    </Card>

                    {/* Guardian Details */}
                    <Card className="shadow-sm border-muted/40">
                        <CardHeader className="bg-muted/30 border-b border-muted/40 py-4">
                            <CardTitle className="text-sm font-black uppercase tracking-[0.2em] flex items-center gap-3 italic">
                                <Users className="w-4 h-4" />
                                Guardians
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 space-y-8">
                            <DetailItem icon={User} label="Father's Name" value={admissionQuery.father_name} />
                            <DetailItem icon={User} label="Mother's Name" value={admissionQuery.mother_name} />
                        </CardContent>
                    </Card>

                    {/* Academic Background */}
                    <Card className="shadow-sm border-muted/40">
                        <CardHeader className="bg-muted/30 border-b border-muted/40 py-4">
                            <CardTitle className="text-sm font-black uppercase tracking-[0.2em] flex items-center gap-3 italic text-black">
                                <GraduationCap className="w-4 h-4" />
                                Academic History
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 space-y-8">
                            <DetailItem icon={Globe} label="Previous School" value={admissionQuery.previous_school_name} />
                            <DetailItem icon={ClipboardList} label="Last Grade Completed" value={admissionQuery.previous_last_grade} />
                        </CardContent>
                    </Card>

                    {/* Medical & Additional */}
                    <Card className="shadow-sm border-muted/40">
                        <CardHeader className="bg-muted/30 border-b border-muted/40 py-4">
                            <CardTitle className="text-sm font-black uppercase tracking-[0.2em] flex items-center gap-3 italic text-black">
                                <ClipboardList className="w-4 h-4" />
                                Additional Notes
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 space-y-8">
                            <DetailItem icon={ClipboardList} label="Medical Information" value={admissionQuery.medical_info} />
                            <DetailItem icon={ClipboardList} label="Special Attention" value={admissionQuery.require_attend} />
                        </CardContent>
                    </Card>

                    {/* Remarks Section */}
                    <Card className="lg:col-span-2 shadow-sm border-muted/40">
                        <CardHeader className="bg-muted/30 border-b border-muted/40 py-4">
                            <CardTitle className="text-sm font-black uppercase tracking-[0.2em] flex items-center gap-3 italic">
                                <ClipboardList className="w-4 h-4" />
                                Remarks
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-8">
                            <div className="bg-muted/20 p-6 rounded-2xl text-sm font-medium leading-relaxed italic text-foreground/80 border border-muted/40">
                                {admissionQuery.remarks || "No additional remarks provided."}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Documents List */}
                    <Card className="shadow-sm border-muted/40">
                        <CardHeader className="bg-muted/30 border-b border-muted/40 py-4">
                            <CardTitle className="text-sm font-black uppercase tracking-[0.2em] flex items-center gap-3 italic text-black">
                                <Paperclip className="w-4 h-4" />
                                Attached Documents
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-8">
                            {admissionQuery.documents && admissionQuery.documents.length > 0 ? (
                                <div className="space-y-3">
                                    {admissionQuery.documents.map((doc: string, idx: number) => (
                                        <a
                                            key={idx}
                                            href={doc}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-muted/40 group transition-all"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center text-blue-600 shadow-sm">
                                                <Paperclip className="w-4 h-4" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-foreground group-hover:text-blue-600 transition-colors">
                                                Document {idx + 1}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-6 opacity-40 italic text-xs font-bold uppercase tracking-widest">
                                    No documents attached
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
