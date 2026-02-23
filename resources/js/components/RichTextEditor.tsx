import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import Image from 'tiptap-extension-resize-image';

import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import { Toggle } from '@/components/ui/toggle';
import { Textarea } from '@/components/ui/textarea';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import {
    Bold,
    Italic,
    List,
    ListOrdered,
    Quote,
    Undo,
    Redo,
    Underline as UnderlineIcon,
    Link as LinkIcon,
    Image as ImageIcon,
    Heading1,
    Heading2,
    Heading3,
    Loader2,
    Code,
    Terminal,
    FileCode,
    Table as TableIcon,
    Plus,
    Trash2,
    Merge,
    Split,
    ArrowUp,
    ArrowDown,
    ArrowLeft,
    ArrowRight
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Table } from '@tiptap/extension-table';

interface RichTextEditorProps {
    id?: string;
    name?: string;
    defaultValue?: string;
    placeholder?: string;
    className?: string;
    onChange?: (content: string) => void;
}

const RichTextEditor = ({
    id,
    name,
    defaultValue = '',
    placeholder = 'Start typing...',
    className = '',
    onChange
}: RichTextEditorProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [isSourceView, setIsSourceView] = useState(false);
    const [html, setHtml] = useState(defaultValue);

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                },
            }),
            Underline,
            Link.configure({
                openOnClick: false,
            }),
            Image.configure({
                // @ts-ignore
                HTMLAttributes: {
                    class: 'max-w-full h-auto rounded-lg my-4',
                },
            }),
            Table.configure({
                resizable: true,
                HTMLAttributes: {
                    class: 'border border-border',
                },
            }),
            TableRow,
            TableHeader,
            TableCell,
            Placeholder.configure({
                placeholder,
            }),
        ],
        content: defaultValue,
        onUpdate: ({ editor }) => {
            const currentHtml = editor.getHTML();
            if (!isSourceView) {
                setHtml(currentHtml);
            }
            if (onChange) {
                onChange(currentHtml);
            }
        },
        editorProps: {
            attributes: {
                class: 'tiptap prose prose-sm dark:prose-invert max-w-none focus:outline-none min-h-[150px] px-3 py-2 text-sm',
            },
        },
    });

    // Update content if defaultValue changes externally
    useEffect(() => {
        if (editor && defaultValue !== editor.getHTML()) {
            editor.commands.setContent(defaultValue);
            setHtml(defaultValue);
        }
    }, [defaultValue, editor]);

    // Update local html when editor content changes (outside of source view)
    useEffect(() => {
        if (editor && !isSourceView) {
            setHtml(editor.getHTML());
        }
    }, [editor, isSourceView]);

    const handleSourceChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newHtml = e.target.value;
        setHtml(newHtml);
        if (editor) {
            editor.commands.setContent(newHtml, false);
            if (onChange) onChange(newHtml);
        }
    };

    const toggleSourceView = () => {
        if (!isSourceView && editor) {
            setHtml(editor.getHTML());
        }
        setIsSourceView(!isSourceView);
    };

    if (!editor) {
        return null;
    }

    const setLink = () => {
        const previousUrl = editor.getAttributes('link').href;
        const url = window.prompt('URL', previousUrl);

        if (url === null) {
            return;
        }

        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
        }

        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            toast.error('Please upload an image file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        setIsUploading(true);
        const uploadToast = toast.loading('Uploading image...');

        try {
            const response = await axios.post('/admin/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.url) {
                // @ts-ignore
                editor.chain().focus().setImage({ src: response.data.url }).run();
                toast.success('Image uploaded successfully', { id: uploadToast });
            }
        } catch (error) {
            console.error('Upload failed:', error);
            toast.error('Failed to upload image', { id: uploadToast });
        } finally {
            setIsUploading(false);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    const triggerImageUpload = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className={`relative w-full overflow-hidden rounded-md border border-input bg-background ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ${className}`}>
            {/* Hidden File Input */}
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
            />

            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-1 border-b bg-muted/50 p-1">
                <Toggle
                    size="sm"
                    pressed={editor.isActive('heading', { level: 1 })}
                    onPressedChange={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    aria-label="Toggle heading 1"
                >
                    <Heading1 className="h-4 w-4" />
                </Toggle>
                <Toggle
                    size="sm"
                    pressed={editor.isActive('heading', { level: 2 })}
                    onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    aria-label="Toggle heading 2"
                >
                    <Heading2 className="h-4 w-4" />
                </Toggle>
                <Toggle
                    size="sm"
                    pressed={editor.isActive('heading', { level: 3 })}
                    onPressedChange={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    aria-label="Toggle heading 3"
                >
                    <Heading3 className="h-4 w-4" />
                </Toggle>

                <div className="mx-1 h-6 w-px bg-border" />

                <Toggle
                    size="sm"
                    pressed={editor.isActive('bold')}
                    onPressedChange={() => editor.chain().focus().toggleBold().run()}
                    aria-label="Toggle bold"
                >
                    <Bold className="h-4 w-4" />
                </Toggle>

                <Toggle
                    size="sm"
                    pressed={editor.isActive('italic')}
                    onPressedChange={() => editor.chain().focus().toggleItalic().run()}
                    aria-label="Toggle italic"
                >
                    <Italic className="h-4 w-4" />
                </Toggle>
                <Toggle
                    size="sm"
                    pressed={editor.isActive('underline')}
                    onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
                    aria-label="Toggle underline"
                >
                    <UnderlineIcon className="h-4 w-4" />
                </Toggle>

                <Toggle
                    size="sm"
                    pressed={editor.isActive('code')}
                    onPressedChange={() => editor.chain().focus().toggleCode().run()}
                    aria-label="Toggle inline code"
                >
                    <Code className="h-4 w-4" />
                </Toggle>

                <div className="mx-1 h-6 w-px bg-border" />

                <Toggle
                    size="sm"
                    pressed={editor.isActive('bulletList')}
                    onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
                    aria-label="Toggle bullet list"
                >
                    <List className="h-4 w-4" />
                </Toggle>
                <Toggle
                    size="sm"
                    pressed={editor.isActive('orderedList')}
                    onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
                    aria-label="Toggle ordered list"
                >
                    <ListOrdered className="h-4 w-4" />
                </Toggle>
                <Toggle
                    size="sm"
                    pressed={editor.isActive('blockquote')}
                    onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
                    aria-label="Toggle blockquote"
                >
                    <Quote className="h-4 w-4" />
                </Toggle>

                <Toggle
                    size="sm"
                    pressed={editor.isActive('codeBlock')}
                    onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}
                    aria-label="Toggle code block"
                >
                    <Terminal className="h-4 w-4" />
                </Toggle>

                <div className="mx-1 h-6 w-px bg-border" />

                <Toggle
                    size="sm"
                    pressed={editor.isActive('link')}
                    onPressedChange={setLink}
                    aria-label="Toggle link"
                >
                    <LinkIcon className="h-4 w-4" />
                </Toggle>
                <Toggle
                    size="sm"
                    onPressedChange={triggerImageUpload}
                    disabled={isUploading}
                    aria-label="Upload image"
                >
                    {isUploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImageIcon className="h-4 w-4" />}
                </Toggle>

                {/* Table Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Toggle size="sm" pressed={editor.isActive('table')} aria-label="Table menu">
                            <TableIcon className="h-4 w-4" />
                        </Toggle>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56 mt-2">
                        <DropdownMenuItem onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>
                            <TableIcon className="mr-2 h-4 w-4" />
                            <span>Insert Table (3x3)</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem disabled={!editor.isActive('table')} onClick={() => editor.chain().focus().addRowBefore().run()}>
                            <ArrowUp className="mr-2 h-4 w-4" />
                            <span>Add Row Above</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem disabled={!editor.isActive('table')} onClick={() => editor.chain().focus().addRowAfter().run()}>
                            <ArrowDown className="mr-2 h-4 w-4" />
                            <span>Add Row Below</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem disabled={!editor.isActive('table')} onClick={() => editor.chain().focus().deleteRow().run()}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete Row</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem disabled={!editor.isActive('table')} onClick={() => editor.chain().focus().addColumnBefore().run()}>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            <span>Add Column Before</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem disabled={!editor.isActive('table')} onClick={() => editor.chain().focus().addColumnAfter().run()}>
                            <ArrowRight className="mr-2 h-4 w-4" />
                            <span>Add Column After</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem disabled={!editor.isActive('table')} onClick={() => editor.chain().focus().deleteColumn().run()}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete Column</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem disabled={!editor.isActive('table')} onClick={() => editor.chain().focus().mergeCells().run()}>
                            <Merge className="mr-2 h-4 w-4" />
                            <span>Merge Cells</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem disabled={!editor.isActive('table')} onClick={() => editor.chain().focus().splitCell().run()}>
                            <Split className="mr-2 h-4 w-4" />
                            <span>Split Cell</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem disabled={!editor.isActive('table')} onClick={() => editor.chain().focus().deleteTable().run()} className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete Table</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="mx-1 h-6 w-px bg-border" />

                <Toggle
                    size="sm"
                    pressed={isSourceView}
                    onPressedChange={toggleSourceView}
                    aria-label="Toggle source view"
                >
                    <FileCode className="h-4 w-4" />
                </Toggle>

                <div className="ml-auto flex items-center gap-1">
                    <Toggle
                        size="sm"
                        onPressedChange={() => editor.chain().focus().undo().run()}
                        disabled={!editor.can().undo()}
                        aria-label="Undo"
                    >
                        <Undo className="h-4 w-4" />
                    </Toggle>
                    <Toggle
                        size="sm"
                        onPressedChange={() => editor.chain().focus().redo().run()}
                        disabled={!editor.can().redo()}
                        aria-label="Redo"
                    >
                        <Redo className="h-4 w-4" />
                    </Toggle>
                </div>
            </div>

            {/* Editor Area */}
            <div className="relative">
                {isSourceView ? (
                    <Textarea
                        value={html}
                        onChange={handleSourceChange}
                        className="min-h-[150px] font-mono text-xs focus-visible:ring-0 focus-visible:ring-offset-0 border-none rounded-none w-full p-3 bg-muted/20"
                    />
                ) : (
                    <EditorContent editor={editor} className="min-h-[150px]" />
                )}

                {isUploading && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/50 backdrop-blur-[1px]">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                )}
            </div>

            {/* Hidden Input for Form Submissions */}
            {name && (
                <input
                    type="hidden"
                    name={name}
                    value={isSourceView ? html : (editor?.getHTML() || "")}
                />
            )}
        </div>
    );
};

export default RichTextEditor;
