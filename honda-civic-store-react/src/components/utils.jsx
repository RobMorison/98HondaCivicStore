export const Header = () => {
  return (
    <div>
      <header>
        <h1>
          One Civic Wonder - <span id="page-title"></span>
        </h1>
        <h2>Your exclusive source for buying a 1998 Honda Civic</h2>
        <nav>
          <ul id="topnav">
            <li class="navlink">
              <a id="homeLink">Home</a>
            </li>

            <li class="navlink">
              <a id="productLink">Products</a>
            </li>

            <li class="navlink">
              <a id="accessoriesLink">Accessories</a>
            </li>
            <li class="navlink">
              <a id="galleryLink">Gallery</a>
            </li>
            <li class="navlink">
              <a id="cartLink">Cart</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

