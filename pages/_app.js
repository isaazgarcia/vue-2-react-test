import App, {Container} from 'next/app'
import React from 'react'
import {PageTransition} from 'next-page-transitions'
import {CacheProvider} from '@emotion/core'
import {cache} from 'emotion';
import {globalStyles} from "../assets/styles";
import { NextSeo,DefaultSeo } from 'next-seo';

export default class MyApp extends App {
    static async getInitialProps({Component, router, ctx}) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }

    render() {
        const {Component, pageProps, router} = this.props;
        return (
            <CacheProvider value={cache}>
                {globalStyles}
                <DefaultSeo
                    titleTemplate ="%s | Vue 2 React Test"
                    openGraph={{
                        type: 'website',
                        locale: 'en_IE',
                        url: 'https://vue-2-react-test.now.sh/',
                        site_name: 'Vue 2 React Test',
                    }}
                />
                <PageTransition timeout={300} classNames="page-transition">

                    <Component {...pageProps} key={router.route}/>
                </PageTransition>

                <style jsx global>{`
            .page-transition-enter {
                opacity: 0;
            }
            .page-transition-enter-active {
                opacity: 1;
                transition: opacity .4s; 
            }
            .page-transition-exit {
                opacity: 1;
            }
            .page-transition-exit-active {
                opacity: 0;
                transition: opacity .4s; 
            }
              `}</style>
            </CacheProvider>
        )
    }
}
