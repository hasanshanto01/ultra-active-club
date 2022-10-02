import React from 'react';

const QuestionAnswer = () => {
    return (
        <div className='rounded-xl border-2 border-purple-200 w-4/5 mx-auto my-10 p-10  bg-slate-100'>
            <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
            <div className='mt-5'>
                <div className='my-4'>
                    <h4 className='text-xl font-bold'>1. How does react work?</h4>
                    <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code. React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.</p>
                </div>
                <div className='my-4'>
                    <h4 className='text-xl font-bold'>2. Difference between props and state in react?</h4>
                    <p><strong>Props:</strong> The Data is passed from one component to another. It is Immutable (cannot be modified). Props can be used with state and functional components. Props are read-only. <strong>State:</strong> The Data is passed within the component only. It is Mutable ( can be modified). State can be used only with the state components/class component (Before 16.0). State is both read and write.</p>
                </div>
                <div className='my-4'>
                    <h4 className='text-xl font-bold'>3. How does useEffect() work?</h4>
                    <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects. Since the render method is to quick to produce a side-effect one needs to use life cycle methods to observe the side effects. For example, consider updating the document title for a simple counter component to the current value. On the initial render, we set the current clicked value to 0 clicks. So, this section is coded into the componentDidMount() method which is executed only once in the component life cycle. Then we create a button to increment the count state value by one on every click. As the count value state changes, we also need to update the document title again and for that, we need to write the same piece of code in componentDidUpdate(). The componentDidupdate() method is perfect for updating the counter value at any time the state changes but the repetition of code is one of the side-effects.</p>
                </div>

            </div>
        </div>
    );
};

export default QuestionAnswer;