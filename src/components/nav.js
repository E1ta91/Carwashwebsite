export const handleClickScroll = (path, offset) => {
    const element = document.getElementById(path);
    const headerOffset = offset;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
};

export const navItems = [
    {  nav: "home" },
    { nav: 'sign up' },
    {  nav: "sign in" },
    
];