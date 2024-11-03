
const ErrorPage = () => {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center bg-white">
        <h1 className="text-9xl font-extrabold text-letra tracking-widest">
          404
        </h1>
        <div className="bg-principal text-white px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button className="mt-5">
          <div className="relative inline-block text-sm font-medium text-letra group focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-letra group-hover:translate-y-0 group-hover:translate-x-0"></span>
  
            <span className="relative block px-8 py-3 bg-custom-principal border border-current">
              <a className="text-white" href="/login">
                Ir a Login
              </a>
            </span>
          </div>
        </button>
        <button></button>
      </div>
    );
  };
  
  export default ErrorPage;
  