import React from 'react';

function waitTimeToLoginPage(){
    setTimeout(() => {
        window.location.href = "/login";
    }, 3000);
}

export default function LandingPage() {
    waitTimeToLoginPage();
    return (
        <div style={{padding: 24}}>
            <h1>Welcome to DnD Campaign Companion</h1>
        </div>
    );
}