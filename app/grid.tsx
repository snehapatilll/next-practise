'use client'
import React, { useState } from 'react';
import './page.css';

const page = () => {
    const [activeCard,setActiveCard] =useState(null)
    // const arrayContent=[`1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aut, blanditiis inventore minima magni eum odio itaque deserunt nam quisquam error sit aspernatur eius quaerat asperiores corporis quod? Beatae?
    //         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque tempora eveniet esse sit est! Nam laborum veritatis, non tempore perferendis assumenda enim quod obcaecati eius dolorem omnis provident repellendus voluptatum.
    //          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos unde a, labore ducimus blanditiis quae at minus ea laboriosam et fugit, minima voluptatem. Tempore, dicta aspernatur ipsum pariatur reprehenderit eligendi!`,
    //         '2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos consequuntur sint nesciunt quaerat fugit velit suscipit consequatur nihil dicta ipsam dolorum, esse culpa delectus voluptate doloribus unde cumque perferendis assumenda!',
    //         '3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos consequuntur sint nesciunt quaerat fugit velit suscipit consequatur nihil dicta ipsam dolorum, esse culpa delectus voluptate doloribus unde cumque perferendis assumenda!',
    //         '4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos consequuntur sint nesciunt quaerat fugit velit suscipit consequatur nihil dicta ipsam dolorum, esse culpa delectus voluptate doloribus unde cumque perferendis assumenda!',
    //         '5 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos consequuntur sint nesciunt quaerat fugit velit suscipit consequatur nihil dicta ipsam dolorum, esse culpa delectus voluptate doloribus unde cumque perferendis assumenda!'
    //         ]

    const arrayContent =[
        {
            title:'card 1',
            summary:'short content details',
            details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos consequuntur sint nesciunt quaerat fugit velit suscipit consequatur nihil dicta ipsam dolorum, esse culpa delectus voluptate doloribus unde cumque perferendis assumenda!'
        },
          {
            title:'card 2',
            summary:'short content details',
            details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos consequuntur sint nesciunt quaerat fugit velit suscipit consequatur nihil dicta ipsam dolorum, esse culpa delectus voluptate doloribus unde cumque perferendis assumenda!'
        },
          {
            title:'card 3',
            summary:'short content details',
            details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos consequuntur sint nesciunt quaerat fugit velit suscipit consequatur nihil dicta ipsam dolorum, esse culpa delectus voluptate doloribus unde cumque perferendis assumenda!'
        },
          {
            title:'card 4',
            summary:'short content details',
            details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos consequuntur sint nesciunt quaerat fugit velit suscipit consequatur nihil dicta ipsam dolorum, esse culpa delectus voluptate doloribus unde cumque perferendis assumenda!'
        },
          {
            title:'card 5',
            summary:'short content details',
            details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos consequuntur sint nesciunt quaerat fugit velit suscipit consequatur nihil dicta ipsam dolorum, esse culpa delectus voluptate doloribus unde cumque perferendis assumenda!'
        },
          {
            title:'card 6',
            summary:'short content details',
            details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos consequuntur sint nesciunt quaerat fugit velit suscipit consequatur nihil dicta ipsam dolorum, esse culpa delectus voluptate doloribus unde cumque perferendis assumenda!'
        },
          {
            title:'card 7',
            summary:'short content details',
            details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos consequuntur sint nesciunt quaerat fugit velit suscipit consequatur nihil dicta ipsam dolorum, esse culpa delectus voluptate doloribus unde cumque perferendis assumenda!'
        }
    ]

    const handleClick=(index:any)=>{
        setActiveCard(activeCard === index? null:index)

    }
  return (

    <div className='grid-con'>
        {arrayContent.map((item,index) => 
        <div 
        key ={index} 
        className={`grid-item ${activeCard === index ? 'active' : ' '}`} 
        onClick={() => (handleClick(index))}> 
        <div>{item.title}</div>
        <div>{item.summary}</div>
        <div>{ activeCard === index && (item.details)}</div>
        </div> )}
     
    </div>
  )
}

export default page