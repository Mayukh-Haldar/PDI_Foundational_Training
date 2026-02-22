function Header() {
  return (
    <div className="navbar bg-base-100 shadow-lg px-6">
      {/* Left Side - Logo + Nav Links */}
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl font-bold">V</a>

        <a className="btn btn-ghost normal-case text-lg">Home</a>
        <a className="btn btn-ghost normal-case text-lg">About</a>
      </div>

      {/* Right Side - Search + Actions */}
      <div className="flex-none gap-3">
        {/* Search Input */}
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-40 md:w-56"
          />
        </div>

        <button className="btn btn-outline btn-primary">Search</button>

        <button className="btn btn-outline">Signin</button>

        <button className="btn btn-primary">Register</button>
      </div>
    </div>
  );
}

export default Header;
