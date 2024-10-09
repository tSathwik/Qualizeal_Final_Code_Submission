
import React from 'react';

const AboutCommunity = () => {
    return (
        <div className="container mx-auto p-6">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold">TestersHive Community Profile</h1>
            </header>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Testing Type Badges:</h2>
                <div className="flex space-x-4">
                    <Badge name="Ln" description="UNRATED TESTER Localization" />
                    <Badge name="Ux" description="UNRATED TESTER Usability" />
                    <Badge name="Sc" description="UNRATED TESTER Security" />
                    <Badge name="Ld" description="UNRATED TESTER Load" />
                    <Badge name="Fn" description="UNRATED TESTER Functional" />
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Platform Statistics:</h2>
                <div className="flex justify-around bg-gray-100 p-4 rounded-lg">
                    <Stat title="Join Date" value="Aug 27, 2024" />
                    <Stat title="Last Login" value="Oct 09, 2024" />
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Community Activity:</h2>
                <div className="flex justify-around bg-gray-100 p-4 rounded-lg">
                    <ActivityItem title="Status Updates" value="0" />
                    <ActivityItem title="Articles" value="0" />
                    <ActivityItem title="Forum Posts" value="0" />
                    <ActivityItem title="Comments" value="0" />
                </div>
            </section>
        </div>
    );
};

const Badge = ({ name, description }) => (
    <div className="bg-teal-500 text-white rounded-lg p-4 flex flex-col items-center">
        <span className="text-3xl font-bold">{name}</span>
        <span className="text-sm">{description}</span>
    </div>
);

const Stat = ({ title, value }) => (
    <div className="text-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-lg">{value}</p>
    </div>
);

const ActivityItem = ({ title, value }) => (
    <div className="text-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-lg">{value}</p>
    </div>
);

export default AboutCommunity;
