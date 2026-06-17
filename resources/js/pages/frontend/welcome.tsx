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
import PopupNotice, { PopupNoticeData } from '@/components/frontend/PopupNotice';
import { News, Slider } from '@/types/Frontend/Index';
import GallerySlider from '@/components/frontend/GallerySlider';
import { Gallery } from '@/types/Frontend/Gallery';
import { Testomonial } from '@/types/Frontend/Testomonial';


const Welcome = () => {
    const { sliders, events, notices, popupNotice, galleries, testomonials } =

        usePage<{
            sliders: Slider[];
            events: News[];
            notices: News[];
            popupNotice: PopupNoticeData;
            galleries: Gallery[];
            testomonials: Testomonial[];
        }>().props;

    return (

        <FrontLayout >
            <Head title="Welcome to " />
            <main className="flex-1">
                <PopupNotice popupNotice={popupNotice} />
                <ImportantNotice notices={notices} />
                <HeroCarousel sliders={sliders} />
                <AboutSchool />
                <Whychoose />
                <NewsEvents events={events} />
                <Testimonials testomonials={testomonials} />
                <NoticeCarousel notices={notices} />
                <GallerySlider galleries={galleries} />
                <GetInTouch />
            </main>

        </FrontLayout>





    );
};

export default Welcome;
