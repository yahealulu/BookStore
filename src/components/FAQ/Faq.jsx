'use client'
import { Accordion, } from 'flowbite-react';

export const Faq = () => {
    const faqs = [
        {
          question: 'What is Book Store',
          answer:
            'Book Store is a built-in app that lets you find, buy, listen to, and read audiobooks and ebooks all in one place. You can browse curated collections, top audiobooks, and top ebooks and even get personalized recommendations. If you can’t find the app on your device, use the search function or look for Book Store in the App Store.',
        },
        {
          question: 'How much does Book Store cost?',
          answer:
            'The Book Store app is free and there is no subscription. Audiobooks and ebooks are priced individually, and thousands of free audiobooks and ebooks are available. You can also sample audiobooks and ebooks for free while you browse.',
        },
        {
          question: 'Can I play audiobooks on my devices?',
          answer: 'Yes. Audiobooks can be played on iPhone, iPad, CarPlay, Apple Watch, Mac, and Apple Vision Pro. You can even play audiobooks on a Bluetooth speaker from your iPhone.',
        },
        {
          question: 'Can I pre-order an audiobook or ebook?',
          answer:
            'Yes. Book Store makes it easy to find the most anticipated audiobooks and ebooks. Search for the title and select the Pre-Order button to confirm the purchase. The title will be added to your library automatically once it is available. To preview upcoming releases, look for the Coming Soon section in the app.',
        },
      ];      
    return (
        <section className='bg-center bg-no-repeat text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-white'>
        <div className='px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-32'>
          <h1 className='mb-16 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl'>Questions? Answers.</h1>
        <Accordion collapseAll className=' border-none'>
        
            {
               faqs.map(({question, answer},index) =>( <Accordion.Panel key={index}>  <Accordion.Title>{index+1}-{question}</Accordion.Title>
                <Accordion.Content>
                 {answer}
                </Accordion.Content> </Accordion.Panel>)) 
            }
      
       
             </Accordion>
             </div>
            </section>

  )
}
