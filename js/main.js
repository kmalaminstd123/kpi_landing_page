gsap.registerPlugin(ScrollTrigger);

// Hero Animation
const heroTl = gsap.timeline();

heroTl.from(".hero-content > *", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
})
.from(".hero-visual .blob", {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
    ease: "elastic.out(1, 0.5)"
}, "-=1")
.from(".glass-card", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
}, "-=1");

// What is KPI Section
gsap.from(".reveal-image", {
    scrollTrigger: {
        trigger: "#what-is-kpi",
        start: "top 80%",
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from("#what-is-kpi .col-lg-6 > *", {
    scrollTrigger: {
        trigger: "#what-is-kpi",
        start: "top 80%",
    },
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

// Why Important Cards
gsap.from(".hover-lift", {
    scrollTrigger: {
        trigger: ".hover-lift",
        start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
});

// Programs
gsap.from(".program-card", {
    scrollTrigger: {
        trigger: "#programs",
        start: "top 80%",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

// World Academy Section
gsap.from(".list-unstyled li", {
    scrollTrigger: {
        trigger: ".bg-dark",
        start: "top 70%",
    },
    x: -30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
});
