import React from 'react';
import Layout from '@theme/Layout';
import HubspotForm from 'react-hubspot-form'

function ContactForm() {

    return (
        <Layout
            title={`Contact`}
            description="Contact Us">
            <main>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "25%" }}></div>
                    <div style={{ width: "50%", paddingTop: "5vh" }}>
                        <h1> Contact Us </h1>
                        <HubspotForm
                            portalId='146992379'
                            formId='dc33fb13-8a95-4baf-a43b-a0cf21c3cf5c'
                            onSubmit={() => console.log('Submitted form')}
                            onReady={(form) => console.log('Form ready for submit')}
                            region="eu1"
                            loading={<div>Loading...</div>}
                        />
                    </div>
                </div>
            </main>
        </Layout>
    );
}
export default ContactForm;
