import React from "react";
import UseTitle from "../../Hooks/UseTitle";

const Blogs = () => {
  UseTitle('Blogs');
  return (
    <div className="mb-10">
      <h1 className="text-5xl uppercase text-center hover:text-slate-500 font-bold mt-10 text-[#05CDE9] mb-3">
        The Community Of Blogs
      </h1>
      <p className="text-center uppercase hover:text-[#05CDE9]">
        Build and drive by the community. On a mission to make every React
        developer's life easier when it comes to building forms.
      </p>
      <div>
        {/* divider */}
        <div className="flex flex-col  w-full border-opacity-50">
          <div className="divider"></div>
        </div>
      </div>
      <div className="grid gird-cols-1 md:gird-cols-3 text-start lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-xl hover:text-slate-900 uppercase text-slate-600 font-bold">
            What are the different ways to manage a state in a React
            application?
          </h3>
          <p className="hover:text-slate-900">
            What is the state management in React? Beau Carnes. React state
            management is a process for managing the data that React components
            need in order to render themselves. This data is typically stored in
            the component's state object. When the state object changes, the
            component will re-render itself. React state management is basically
            half of a React app.Which state management is best in React? React's
            useState is the best option for local state management. If you need
            a global state solution, the most popular ones are Redux, MobX, and
            the built-in Context API. Your choice will depend on the size of
            your project, your needs, and your engineers' expertise.
          </p>
        </div>
        <div>
          <h3 className="text-xl hover:text-slate-900 text-slate-600 uppercase font-bold">
            How does prototypical inheritance work?
          </h3>
          <p  className="hover:text-slate-900">
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. getPrototypeOf and Object.The most important
            difference between class- and prototype-based inheritance is that a
            class defines a type which can be instantiated at runtime, whereas a
            prototype is itself an object instance.
          </p>
        </div>
        <div>
          <h3 className="text-xl hover:text-slate-900 text-slate-600 uppercase font-bold">
            What is a unit test? Why should we write unit tests?
          </h3>
          <p  className="hover:text-slate-900">
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.A unit test is a way of
            testing a unit - the smallest piece of code that can be logically
            isolated in a system. In most programming languages, that is a
            function, a subroutine, a method or property. The isolated part of
            the definition is important.
          </p>
        </div>
        <div>
          <h3 className="text-xl hover:text-slate-900 text-slate-600 font-bold uppercase justify-center">React vs. Angular vs. Vue?</h3>
          <p  className="hover:text-slate-900">
            Vue provides higher customizability and hence is easier to learn
            than Angular or React. Further, Vue has an overlap with Angular and
            React with respect to their functionality like the use of
            components. Hence, the transition to Vue from either of the two is
            an easy optionReact is better than Angular due to it's virtual DOM
            implementation and rendering optimizations. Migrating between
            React's versions is quite easy, too; you don't need to install
            updates one by one, as in the case of Angular. Finally, with React,
            developers have myriads of existing solutions they can use Angular
            uses TypeScript and has components as its main building blocks. It
            is component-based, whereas AngularJS uses directives. Angular's
            operation employs a hierarchy of components, while AngularJS has
            directives that allow code reusability. So, The AngularJS framework
            provides reusable components for its users..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
