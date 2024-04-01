import React, { useState } from "react";

export const TextField = (props) => {
  const [inputType, setInputType] = useState(props.type);

  
  return (
    <div>
        <div className="w-full relative">
          {props.type && props.type === 'password' &&
            <div className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-black" onClick={() => setInputType(inputType === 'text' ? 'password' : 'text')}>
              {inputType === 'password' ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 3C17.5915 3 22.2898 6.82432 23.6219 12C22.2898 17.1757 17.5915 21 12 21C6.40848 21 1.71018 17.1757 0.378052 12C1.71018 6.82432 6.40848 3 12 3ZM12 19C7.52443 19 3.73132 16.0581 2.45723 12C3.73132 7.94186 7.52443 5 12 5C16.4756 5 20.2687 7.94186 21.5428 12C20.2687 16.0581 16.4756 19 12 19Z" fill="currentColor" /></svg>
              ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L22 22" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ) }
              </div>          
          }
          <input {...props} type={inputType} className={`w-full h-11 border rounded-md outline-none text-black p-2 ${ props.error ? 'border-red-400' : 'border-white-400'}`} />
        </div>
          {props.error &&
            <span className="text-red-400">{props.error}</span>
          }
    </div>
  );
};
