import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container shadow qna py-5 px-5'>
            <h1 className='qna-title'>Frequently Asked Questions</h1>

            <div className="blog">
                <h3 className='blog-title'>Difference between javascript and nodejs</h3>
                <p className='blog-body'>
                    <strong>JavaScript: </strong>
                    JavaScript is a simple programming language that runs in any browser JavaScript Engine.JavaScript is normally used for any client-side activity for one web application. An activity can be addressing business validation or dynamic page display in some schedule time interval or basic Ajax call kind of task. Those are used for a maximum time for any web application.
                    <br />
                    <br />
                    <strong>Nodejs:</strong>
                    Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.Node JS mainly used for accessing or running any operating system for non-blocking operation. An operation like creating or executing a shell script, or getting some specific hardware-related information on one call or installed certificate details in the system or a lot of define task is non-blocking on an operating system.
                </p>
            </div>
            <div className="blog">
                <h3 className='blog-title'>When should you use nodejs and when should you use mongodb</h3>
                <p className='blog-body'>
                    Node.js is popularly being used in web applications because it lets the application run while it is fetching data from the backend server. It is asynchronous, event-driven and helps to build scalable web applications. Even though Node.js works well with MySQL database, the perfect combination is a NoSQL like MongoDB wherein the schema need not be well-structured. MongoDB represents the data as a collection of documents rather than tables related by foreign keys. This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node.js. Another option is using CouchDB that also stores the data as JSON/BSON environment.
                </p>
            </div>
            <div className="blog">
                <h3 className='blog-title'>Differences between sql and nosql databases</h3>
                <p className='blog-body'>
                    <strong>SQL: </strong>
                    SQL databases are vertically scalable.SQL databases are better for multi-row transactions.SQL databases are table-based.Relational database management system.These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.
                    <br />
                    <br />
                    <strong>NoSQL:</strong>
                    NoSQL databases are horizontally scalable.NoSQL is better for unstructured data like documents or JSON. NoSQL databases are document, key-value, graph, or wide-column stores.Non-relational or distributed database system.They have dynamic schema.These databases are best suited for hierarchical data storage.
                </p>
            </div>
            <div className="blog">
                <h3 className='blog-title'>What is the purpose of jwt and how does it work .?</h3>
                <p className='blog-body'>
                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                </p>
            </div>

        </div>
    );
};

export default Blogs;