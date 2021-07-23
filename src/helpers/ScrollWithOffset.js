//function from: https://codesandbox.io/s/04rsh?file=/src/components/Navbar.jsx:977-1018

export const scrollWithOffset = (el, offset) => {
    window.scroll({
      top: el.offsetTop - offset,
      left: 0,
      behavior: "smooth"
    });
};