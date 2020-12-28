
import React, { Component } from 'react';
import TopBar from './TopBar';
import Navbar from './navbar';

class Page extends Component {

    render() {
        return (
            <div>
                <TopBar />
                <div class="px-20 py-6">
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default Page;