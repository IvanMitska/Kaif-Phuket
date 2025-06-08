// Общие анимационные варианты для всего проекта
export const fadeInUp = {
  hidden: { 
    y: 50, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 30,
      duration: 0.6 
    } 
  },
  exit: {
    y: 30,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const fadeInDown = {
  hidden: { 
    y: -50, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 30,
      duration: 0.6 
    } 
  }
};

export const fadeInLeft = {
  hidden: { 
    x: -100, 
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

export const fadeInRight = {
  hidden: { 
    x: 100, 
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

export const scaleIn = {
  hidden: { 
    scale: 0.9, 
    opacity: 0 
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5
    }
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

export const bounceIn = {
  hidden: { 
    scale: 0.85, 
    opacity: 0 
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
      mass: 1
    }
  }
};

export const textFadeIn = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    } 
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15
    }
  }
};

export const staggerItems = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15
    }
  }
};

export const containerVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.08,
      staggerDirection: -1,
      duration: 0.3
    }
  }
};

export const buttonAnimation = {
  hidden: { 
    scale: 0.9, 
    opacity: 0 
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
      delay: 0.5
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95
  }
};

export const heroTextAnimation = {
  hidden: { 
    y: 50, 
    opacity: 0 
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      delay: 0.2
    }
  }
};

export const slideInRight = {
  hidden: { 
    x: 100, 
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: { 
      duration: 0.4 
    }
  }
};

export const slideInLeft = {
  hidden: { 
    x: -100, 
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: { 
      duration: 0.4 
    }
  }
}; 