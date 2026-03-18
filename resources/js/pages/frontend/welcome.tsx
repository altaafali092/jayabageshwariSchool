import React from 'react';
import HeroCarousel from '@/components/frontend/HeroCarousel';
import { Head, usePage } from '@inertiajs/react';
import AboutSchool from '@/components/frontend/AboutSchool';
import Whychoose from '@/components/frontend/Whychoose';
import NewsEvents from '@/components/frontend/NewsEvents';
import ImportantNotice from '@/components/frontend/ImportantNotice';
import NoticeCarousel from '@/components/frontend/NoticeCarousel';
import GetInTouch from '@/components/frontend/GetInTouch';
import Testimonials from '@/components/frontend/Testimonials';
import FrontLayout from './Layouts/FrontLayout';
import PopupNotice from '@/components/frontend/PopupNotice';
import { News, Slider } from '@/types/Frontend/Index';
import GallerySlider from '@/components/frontend/GallerySlider';
import { Gallery } from '@/types/Frontend/Gallery';


const Welcome = () => {
    const { sliders, events, notices, popupNotice ,galleries} =

        usePage<{
            sliders: Slider[];
            events: News[];
            notices: News[];
            popupNotice: News;
            galleries: Gallery[];
        }>().props;

    return (

        <FrontLayout >
            <Head title="Welcome to " />
            <main className="flex-1">
                {/* Important Announcements Popup */}
                <PopupNotice popupNotice={popupNotice} />

                {/* High-Visibility Alert Bar */}
                <ImportantNotice notices={notices} />

                {/* Hero Section */}
                <HeroCarousel sliders={sliders} />

                <AboutSchool />
                <Whychoose />
                <NewsEvents events={events} />
                {/* Testimony Hub */}
                <Testimonials />

                {/* Detailed Notice Bulletin */}
                <NoticeCarousel notices={notices} />
                <GallerySlider galleries={galleries} />

                {/* Contact Section */}
                <GetInTouch />
            </main>

        </FrontLayout>





    );
};

export default Welcome;
