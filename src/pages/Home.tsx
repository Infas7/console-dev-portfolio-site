const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-2 py-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent font-extrabold">
        <pre>
          {' _    _      _                                   \n'}
          {'| |  | |    | |                                  \n'}
          {'| |  | | ___| | ___  ___  _ __ ___  ___          \n'}
          {"| |/\\| |/ _ | |/  __/ _ \\| '_ ` _ \\/  _ \\    \n"}
          {'\\  /\\  / __/  |  (_| (_) | | | | | |  __/      \n'}
          {' \\/  \\/ \\___|_|\\____\\___/|_| |_| |_|\\___|  \n'}
        </pre>
      </div>
      <div className="text-center mx-4 sm:mx-2">
        Hello Hello!!!🤝 Glad to see you in my terminal'ish portfolio. For helps
        please type command <span className="text-yellow-500">'man'</span> 😊
      </div>
    </div>
  );
};

export default Home;
