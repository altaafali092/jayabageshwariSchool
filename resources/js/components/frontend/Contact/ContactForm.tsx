
import { contactForm } from "@/actions/App/Http/Controllers/FrontController";
import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Form } from "@inertiajs/react";
import { Send, SendIcon } from "lucide-react";

import React from 'react'
import toast from "react-hot-toast";

const ContactForm = () => {
    return (
        <div className="lg:col-span-7 relative">
            <div className="absolute -inset-4 bg-blue-50 dark:bg-blue-900/10 rounded-[3rem] blur-2xl opacity-50 transition-colors" />
            <div className="relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] p-8 md:p-14 shadow-2xl shadow-blue-900/5 dark:shadow-black/50 transition-colors">
                <div className="mb-12">
                    <h3 className="text-3xl font-black text-slate-950 dark:text-white mb-3 tracking-tighter uppercase">Send a Message</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Please fill in the form below and we'll get back to you within 24 hours.</p>
                </div>

                <Form action={contactForm().url} method="POST" encType="multipart/form-data"
                    options={{
                        preserveScroll: true,
                        onSuccess: () => {
                            toast.success('Message submitted successfully')

                        },
                    }}
                    resetOnSuccess={['full_name', 'email', 'phone', 'subject', 'message']}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                    {({ errors, processing }) => (
                        <>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-1">Full Name</label>
                                <input
                                    name="full_name"
                                    type="text"
                                    placeholder="Example: John Doe"
                                    className="w-full h-14 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 text-slate-900 dark:text-white font-bold outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-600/5 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                                />
                                <InputError message={errors.full_name} />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-1">Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full h-14 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 text-slate-900 dark:text-white font-bold outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-600/5 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                                />
                                <InputError message={errors.email} />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-1">Mobile No.</label>
                                <input
                                    name="phone"
                                    type="number"
                                    placeholder="98*******"
                                    className="w-full h-14 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 text-slate-900 dark:text-white font-bold outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-600/5 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                                />
                                <InputError message={errors.phone} />
                            </div>

                            <div className="md:col-span-2 space-y-3">
                                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-1">Subject</label>
                                <input
                                    name="subject"
                                    type="text"
                                    placeholder="What is this regarding?"
                                    className="w-full h-14 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 text-slate-900 dark:text-white font-bold outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-600/5 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                                />
                                <InputError message={errors.subject} />
                            </div>
                            <div className="md:col-span-2 space-y-3">
                                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-1">Your Message</label>
                                <textarea
                                    rows={5}
                                    name="message"
                                    placeholder="Write your message here..."
                                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-6 text-slate-900 dark:text-white font-bold outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-600/5 transition-all resize-none placeholder:text-slate-300 dark:placeholder:text-slate-600"
                                ></textarea>
                                <InputError message={errors.message} />
                            </div>



                            <div className="pt-6">
                                <Button type="submit"
                                    className="w-full h-14 bg-blue-600 dark:bg-blue-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-950 dark:hover:bg-blue-700 transition-all active:scale-[0.98] shadow-lg shadow-blue-600/20 dark:shadow-blue-900/40 uppercase tracking-widest text-xs italic"
                                >

                                    {processing && <Spinner />}
                                    Dispatch Message <SendIcon className="h-4 w-4" />

                                </Button>
                            </div>

                        </>
                    )}
                </Form>
            </div>
        </div>
    )
}

export default ContactForm