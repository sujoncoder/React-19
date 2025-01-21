import { useState } from 'react';

export default function Form() {
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });

    function handleName(e) {
        setPerson({
            ...person,
            name: e.target.value
        })
    };

    function handleTitle(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }

        })
    };

    function handleCity(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value
            }

        })
    };

    function handleImage(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value
            }

        })
    };


    return (
        <section className='flex justify-center items-center pt-10'>
            <div className='flex flex-col w-[400px] bg-white rounded shadow p-5'>
                <label className='text-xl'>
                    Name:{"  "}
                    <input
                        value={person.name}
                        onChange={handleName}
                        placeholder='Write your name' className='border px-2' />
                </label> <br />

                <label className='text-xl'>
                    Title:{"  "}
                    <input
                        value={person.artwork.title}
                        onChange={handleTitle}
                        placeholder='Write your title' className='border px-2' />
                </label><br />

                <label className='text-xl'>
                    City:{"  "}
                    <input
                        value={person.artwork.city}
                        onChange={handleCity}
                        placeholder='Write your city' className='border px-2' />
                </label><br />

                <label className='text-xl'>
                    Image: {"  "}
                    <input
                        value={person.artwork.image}
                        onChange={handleImage}
                        placeholder='your image url' className='border px-2' />
                </label>

                <p className='mt-10 border p-5 text-slate-700 text-lg font-semibold text-center'>
                    {person.name} <br />
                    {person.artwork.title} <br />
                    {person.artwork.city} <br />
                    <img src={person.artwork.image} alt={person.artwork.image} />
                </p>


            </div>
        </section>
    );
}
