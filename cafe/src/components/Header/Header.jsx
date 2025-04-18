import logo from "../../dist/svg/logo.svg";
const Header = () => {
  return (
    <div className="justify-center">
      <div className="navbar mx-auto flex bg-base-500 justify-center shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <img src={logo} alt="Uni" className="w-78 h-25" />
          </div>
        </div>
        <div className="navbar justify-center">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Addmissions</summary>
                  <ul className="p-2">
                    <li>
                      <a className="link link-hover">
                        English For Academic Porpuses
                      </a>
                    </li>
                    <li>
                      <a className="link link-hover">Programs</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Academics</summary>
                  <ul className="p-2">
                    <li>
                      <a className="link link-hover">Academic Calendar</a>
                    </li>
                    <li>
                      <a className="link link-hover">Library</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Research</a>
              </li>
              <li>
                <details>
                  <summary>Campus life</summary>
                  <ul className="p-2">
                    <li>
                      <a className="link link-hover">Athletics</a>
                    </li>
                    <li>
                      <a className="link link-hover">events</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Community</summary>
                  <ul className="p-2">
                    <li>
                      <a className="link link-hover">Alumni</a>
                    </li>
                    <li>
                      <a className="link link-hover">Giving</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="#">Calgary Campus</a>
              </li>
              <li>
                <details>
                  <summary>About</summary>
                  <ul className="p-2">
                    <li>
                      <a className="link link-hover">Contacts</a>
                    </li>
                    <li>
                      <a className="link link-hover">Facts</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
