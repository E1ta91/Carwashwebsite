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
    { label: 'Home', nav: "home" },
    { label: 'Sign Up', nav: 'sign up' },
    { label: "Sign In", nav: "sign in" },
    
];