import React from 'react';

function waitTimeToLoginPage(){
    setTimeout(() => {
        window.location.href = "/login";
    }, 3000);
}

export default function LandingPage() {
    waitTimeToLoginPage();
    return (
        <div class = "text-3xl font-bold underline">
            <h1>Welcome to DnD Campaign Companion</h1>
        </div>
    );
}