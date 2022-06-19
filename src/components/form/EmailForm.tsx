import * as React from 'react';

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
}
interface EmailFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const EmailForm = () => {
  const [hasSubmitted, setHasSubmitted] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<EmailFormElement>) => {
    event.preventDefault();

    const data = {
      email: event.currentTarget.elements.email.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = '/api/lead';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    if (result.message === 'OK') setHasSubmitted(true);
  };

  return (
    <div className="flex justify-center">
      {hasSubmitted ? (
        <div className="text-blue-400 text-xl py-3 px-2">
          Thanks for submitting your email
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex items-center py-2">
            <input
              className="appearance-none bg-gray-200 border-none w-full text-gray-800 mr-3 py-4 px-2 leading-tight focus:outline-none"
              type="email"
              id="email"
              name="email"
              placeholder="youremail@domain.com"
              aria-label="Email"
              required
            />
            <button
              className="flex-shrink-0 bg-blue-400 hover:bg-blue-500 border-blue-400 hover:border-blue-500 text-sm border-4 text-white py-3 px-2 rounded"
              type="submit"
            >
              Get early access
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EmailForm;
