import React from 'react';

const Bonus = () => {
    return (
        // Bonus Question Answer
        <div className='mt-5 bg-light p-3 rounded'>
            <h1 className='text-center'>Questions and Answers</h1>
            <h3>How React Work?</h3>
            <p>ReactJS is a popular JavaScript library for developing mobile and web applications.
                React, which was created by Facebook, is a collection of reusable JavaScript code
                snippets used for user interface (UI) building known as components.
                One of the most significant advantages of using React is that we can
                inject JavaScript into HTML code. By declaring the Element function in React,
                users can create a representation of a DOM node. The syntax of HTML code in
                react is similar to that of XML. Instead of the traditional DOM class, React
                employs className. There is a name, children, and attributes for JSX tags.
                Curly brackets must be used to surround numerical values and expressions.
                To simplify components and keep code clean, React is typically written in
                JSX rather than standard JavaScript.</p>
            <h3>Difference between Props and State.</h3>
            <p><strong>State: </strong>The state is a dynamically changing structure that contains
                data or information about the component. A user action or a system event can result in
                a change in status. The react component's heart is what governs how the component
                behaves and renders. A state should be as easy to understand as feasible. It represents
                the component's local state or information. It can only be accessed or modified by the
                component itself or by the component itself.<br />
                <strong>Props: </strong>Props are components that can only be read.
                It's a type of object that keeps the value of a tag's attributes and works
                in the same way that HTML attributes do. It enables the transfer of data from
                one component to another. It works in the same way as function arguments and can be
                supplied to the component in the same way. We can't update props from within the component
                because they're immutable.</p>
        </div >
    );
};

export default Bonus;