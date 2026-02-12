import React from 'react';
import HeroCarousel from '@/components/frontend/HeroCarousel';
import { Head } from '@inertiajs/react';
import AboutSchool from '@/components/frontend/AboutSchool';
import Whychoose from '@/components/frontend/Whychoose';
import NewsEvents from '@/components/frontend/NewsEvents';
import ImportantNotice from '@/components/frontend/ImportantNotice';
import NoticeCarousel from '@/components/frontend/NoticeCarousel';
import GetInTouch from '@/components/frontend/GetInTouch';
import Testimonials from '@/components/frontend/Testimonials';
import FrontLayout from './Layouts/FrontLayout';
import PopupNotice from '@/components/frontend/PopupNotice';

const Welcome = () => {
    return (

        <FrontLayout>
            <Head title="JBS" />
            <main className="flex-1">
                {/* Important Announcements Popup */}
                <PopupNotice />

                {/* High-Visibility Alert Bar */}
                <ImportantNotice />

                {/* Hero Section */}
                <HeroCarousel />

                <AboutSchool />
                <Whychoose />
                <NewsEvents />
                {/* Testimony Hub */}
                <Testimonials />

                {/* Detailed Notice Bulletin */}
                <NoticeCarousel />

                {/* Contact Section */}
                <GetInTouch />
            </main>

        </FrontLayout>





    );
};

export default Welcome;
