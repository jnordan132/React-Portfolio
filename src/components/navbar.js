import { $, jQuery } from 'jquery';
import TweenMax from 'gsap';

const styles =  {
    mainNav: {
        position: 'fixed',
        top: '0px',
        maxHeight: '50px',
        zIndex: '999',
        width: '100%',
        paddingTop: '17px',
        background: 'none',
        overflow: 'hidden',
        webkitTransition: 'all 0.3s',
        transition: 'all 0.3s',
        opacity: '0',
        paddingBottom: '15px',
    },
    ul: {
        listStyleType: 'none',
        overflow: 'hidden',
        textAlign: 'center',
    },
    ulli: {
        display: 'inline-block',
        alignItems: 'center',
        marginLeft: '15px',
        marginRight: '15px',
        lineHeight: '1.5',
        letterSpacing: '1px',
    }
};

function Navbar() {
    const home = "HOME";
    const about = "ABOUT";
    const skills = "SKILLS";
    const portfolio = "PORTFOLIO";
    const contact = "CONTACT";

    return <div style={styles.mainNav} className="main_nav">
    <div className="container">
        <div className="mobile-toggle"><span></span> <span></span> <span></span></div>
        <nav>
            <ul style={styles.ul}>
                <li style={styles.ulli}><a href="#home">{home}</a></li>
                <li style={styles.ulli}><a href="#about">{about}</a></li>
                <li style={styles.ulli}><a href="#skills">{skills}</a></li>
                <li style={styles.ulli}><a href="#portfolio">{portfolio}</a></li>
                <li style={styles.ulli}><a href="#contact">{contact}</a></li>
            </ul>
        </nav>
    </div>
</div>
}

// Header Functionality
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 200) {
        $('.main_nav').addClass('sticky');
    } else {
        $('.main_nav').removeClass('sticky');
    }
});

$('.mobile-toggle').on("click", function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.main_nav').removeClass('open-nav');
    } else {
        $('.main_nav').addClass('open-nav');
    }
});

$('.main_nav li a').on("click", function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_nav').removeClass('open-nav');
    }
});

// Scroll
jQuery(document).ready(function($) {
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();
        const target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function() {
            window.location.hash = target;
        });
    });

});
window.TweenMax.staggerFrom(".heading", 0.8, { opacity: 0, y: 20, delay: 0.2 }, 0.4);

export default Navbar;