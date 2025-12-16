// ===== DOM Elements =====
document.addEventListener('DOMContentLoaded', function() {
    // Navigation elements
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    // Chat elements
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const typingIndicator = document.getElementById('typingIndicator');
    const clearChatBtn = document.getElementById('clearChatBtn');
    const suggestionChips = document.querySelectorAll('.suggestion-chip');
    const topicBtns = document.querySelectorAll('.topic-btn');
    
    // Contact form elements
    const contactForm = document.getElementById('contactForm');
    
    // Stats counter elements
    const statItems = document.querySelectorAll('.stat-item');

    // ===== Navigation Toggle =====
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = navLinks.classList.contains('active') 
                ? 'rotate(45deg) translate(5px, 5px)' 
                : 'none';
            spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navLinks.classList.contains('active') 
                ? 'rotate(-45deg) translate(7px, -7px)' 
                : 'none';
        });
    }

    // ===== Chat Functionality =====
    const csKnowledgeBase = {
        'data structures': {
            'linked list': 'A linked list is a linear data structure where elements are stored in nodes. Each node contains data and a reference (pointer) to the next node. Types include singly linked lists, doubly linked lists, and circular linked lists.',
            'array': 'An array is a collection of elements stored at contiguous memory locations. It allows random access to elements using indices. Arrays have fixed size and are ideal for storing multiple items of the same type.',
            'stack': 'A stack is a LIFO (Last In First Out) data structure. Elements are added and removed from the top. Common operations are push (add), pop (remove), and peek (view top element).',
            'queue': 'A queue is a FIFO (First In First Out) data structure. Elements are added at the rear and removed from the front. Used in scheduling, buffering, and breadth-first search.',
            'tree': 'A tree is a hierarchical data structure with a root node and child nodes forming a parent-child relationship. Binary trees, BST, AVL trees, and heaps are common types.',
            'graph': 'A graph is a collection of nodes (vertices) connected by edges. Can be directed or undirected, weighted or unweighted. Used in networks, social connections, and pathfinding.',
            'hash table': 'A hash table uses a hash function to map keys to values, providing O(1) average-case lookup. Handles collisions using chaining or open addressing.'
        },
        'algorithms': {
            'binary search': 'Binary search is an efficient algorithm for finding an item in a sorted array. It works by repeatedly dividing the search interval in half. Time complexity: O(log n).',
            'bubble sort': 'Bubble sort repeatedly steps through the list, compares adjacent elements and swaps them if they\'re in wrong order. Time complexity: O(n²). Simple but inefficient for large datasets.',
            'merge sort': 'Merge sort divides the array into halves, recursively sorts them, and merges the sorted halves. Time complexity: O(n log n). Stable and efficient.',
            'quick sort': 'Quick sort picks a pivot element and partitions the array around it. Elements smaller than pivot go left, larger go right. Average time complexity: O(n log n).',
            'recursion': 'Recursion is when a function calls itself to solve smaller instances of the same problem. Needs a base case to stop recursion. Used in tree traversal, factorial, Fibonacci.',
            'dynamic programming': 'Dynamic programming solves complex problems by breaking them into simpler subproblems and storing results to avoid recomputation. Used in optimization problems.',
            'dijkstra': 'Dijkstra\'s algorithm finds the shortest path from a source vertex to all other vertices in a weighted graph. Uses a priority queue. Time complexity: O((V+E) log V).'
        },
        'programming': {
            'oop': 'Object-Oriented Programming (OOP) is a paradigm based on objects containing data and code. Key concepts: encapsulation, inheritance, polymorphism, and abstraction.',
            'function': 'A function is a reusable block of code that performs a specific task. It can accept parameters and return values. Functions promote code reusability and organization.',
            'variable': 'A variable is a named storage location in memory that holds a value. Variables have types (int, string, etc.) and scope (local, global).',
            'loop': 'A loop repeatedly executes a block of code. Types include for loops (known iterations), while loops (condition-based), and do-while loops.',
            'class': 'A class is a blueprint for creating objects. It defines properties (attributes) and methods (functions) that objects of that class will have.',
            'inheritance': 'Inheritance allows a class to inherit properties and methods from another class. Promotes code reuse. The inheriting class is called a child/derived class.',
            'polymorphism': 'Polymorphism allows objects of different classes to be treated as objects of a common parent class. Enables method overriding and overloading.'
        },
        'web development': {
            'html': 'HTML (HyperText Markup Language) is the standard language for creating web pages. It uses tags to structure content like headings, paragraphs, links, and images.',
            'css': 'CSS (Cascading Style Sheets) styles HTML elements. It controls layout, colors, fonts, and responsive design. Can be inline, internal, or external.',
            'javascript': 'JavaScript is a programming language that enables interactive web pages. It can manipulate the DOM, handle events, make API calls, and create dynamic content.',
            'dom': 'The DOM (Document Object Model) is a programming interface for HTML documents. It represents the page structure as a tree, allowing scripts to update content and structure.',
            'api': 'An API (Application Programming Interface) allows different software to communicate. REST APIs use HTTP methods (GET, POST, PUT, DELETE) to transfer data.',
            'json': 'JSON (JavaScript Object Notation) is a lightweight data format. Uses key-value pairs. Easy to read/write for humans and parse for machines.',
            'responsive design': 'Responsive design ensures websites work on all device sizes. Uses flexible layouts, media queries, and relative units. Mobile-first approach is recommended.'
        },
        'databases': {
            'sql': 'SQL (Structured Query Language) is used to manage relational databases. Common commands: SELECT (query), INSERT (add), UPDATE (modify), DELETE (remove).',
            'database': 'A database is an organized collection of structured data. Types include relational (SQL) and non-relational (NoSQL). Provides CRUD operations.',
            'primary key': 'A primary key uniquely identifies each record in a table. Must be unique and not null. Often an auto-incrementing ID.',
            'foreign key': 'A foreign key links two tables together. It references the primary key of another table, establishing relationships between data.',
            'join': 'JOIN combines rows from two or more tables based on a related column. Types: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN.',
            'index': 'An index improves database query speed by creating a data structure that allows faster searches. Like a book index, it helps locate data quickly.',
            'normalization': 'Database normalization organizes data to reduce redundancy and improve integrity. Divided into normal forms (1NF, 2NF, 3NF, BCNF).'
        },
        'general': {
            'computer science': 'Computer Science is the study of computers and computational systems. It covers programming, algorithms, data structures, AI, networks, security, and more.',
            'algorithm': 'An algorithm is a step-by-step procedure for solving a problem. Must be finite, well-defined, and produce correct output for valid input.',
            'complexity': 'Time complexity measures how algorithm runtime grows with input size. Space complexity measures memory usage. Expressed using Big O notation.',
            'big o': 'Big O notation describes algorithm efficiency. Common: O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) linearithmic, O(n²) quadratic.',
            'debugging': 'Debugging is finding and fixing errors in code. Techniques include print statements, breakpoints, step-through execution, and using debugger tools.',
            'version control': 'Version control tracks changes to code over time. Git is the most popular system. Enables collaboration, branching, and rollback.',
            'git': 'Git is a distributed version control system. Commands: commit (save changes), push (upload), pull (download), branch (create versions), merge (combine).'
        }
    };

    // Chat functionality
    if (chatForm) {
        chatForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const message = chatInput.value.trim();
            
            if (message) {
                addUserMessage(message);
                chatInput.value = '';
                
                // Show typing indicator
                if (typingIndicator) {
                    typingIndicator.style.display = 'flex';
                }
                
                // Simulate bot response delay
                setTimeout(() => {
                    if (typingIndicator) {
                        typingIndicator.style.display = 'none';
                    }
                    const botResponse = generateBotResponse(message);
                    addBotMessage(botResponse);
                }, 1500);
            }
        });
    }

    // Suggestion chips
    suggestionChips.forEach(chip => {
        chip.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            chatInput.value = question;
            chatForm.dispatchEvent(new Event('submit'));
        });
    });

    // Topic buttons
    topicBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            const topicMessages = {
                'data-structures': 'Tell me about data structures in computer science.',
                'algorithms': 'What are algorithms and why are they important?',
                'programming': 'Explain programming concepts.',
                'web-dev': 'What is web development?',
                'databases': 'Explain databases and SQL.',
                'networking': 'Tell me about computer networks.'
            };
            
            if (topicMessages[topic]) {
                chatInput.value = topicMessages[topic];
                chatForm.dispatchEvent(new Event('submit'));
            }
        });
    });

    // Clear chat
    if (clearChatBtn) {
        clearChatBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to clear the chat?')) {
                const firstMessage = chatMessages.querySelector('.bot-message');
                const suggestions = chatMessages.querySelector('.suggestions');
                chatMessages.innerHTML = '';
                if (firstMessage) chatMessages.appendChild(firstMessage.cloneNode(true));
                if (suggestions) chatMessages.appendChild(suggestions.cloneNode(true));
                
                // Re-attach event listeners to suggestion chips
                const newChips = chatMessages.querySelectorAll('.suggestion-chip');
                newChips.forEach(chip => {
                    chip.addEventListener('click', function() {
                        const question = this.getAttribute('data-question');
                        chatInput.value = question;
                        chatForm.dispatchEvent(new Event('submit'));
                    });
                });
            }
        });
    }

    // Add user message to chat
    function addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">👤</div>
            <div class="message-content">
                <p>${escapeHtml(message)}</p>
                <span class="message-time">${getCurrentTime()}</span>
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Add bot message to chat
    function addBotMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">🤖</div>
            <div class="message-content">
                <p>${message}</p>
                <span class="message-time">${getCurrentTime()}</span>
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Generate bot response based on keywords
    function generateBotResponse(userMessage) {
        const messageLower = userMessage.toLowerCase();
        
        // Check all categories for matching keywords
        for (const category in csKnowledgeBase) {
            for (const keyword in csKnowledgeBase[category]) {
                if (messageLower.includes(keyword)) {
                    return csKnowledgeBase[category][keyword];
                }
            }
        }
        
        // Greetings
        if (messageLower.match(/^(hi|hello|hey|greetings)/)) {
            return 'Hello! I\'m BitBrainiac, your CS tutor. I can help you with programming, data structures, algorithms, web development, databases, and more. What would you like to learn today?';
        }
        
        // Thanks
        if (messageLower.match(/thank/)) {
            return 'You\'re welcome! Feel free to ask me anything else about computer science. I\'m here to help!';
        }
        
        // Help
        if (messageLower.match(/help|what can you/)) {
            return 'I can help you learn about:\n• Programming concepts (variables, functions, OOP)\n• Data structures (arrays, linked lists, trees, graphs)\n• Algorithms (sorting, searching, recursion)\n• Web development (HTML, CSS, JavaScript)\n• Databases (SQL, normalization, joins)\n• And much more! Just ask me a question.';
        }
        
        // Default response
        return 'That\'s an interesting question! While I specialize in computer science topics like programming, data structures, algorithms, web development, and databases, I might need you to rephrase your question. Try asking about specific CS concepts like "What is a linked list?" or "Explain binary search algorithm".';
    }

    // Get current time
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }

    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    // ===== Contact Form Validation =====
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        const formSuccess = document.getElementById('formSuccess');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Reset errors
            clearErrors();
            
            // Validate name
            if (nameInput.value.trim().length < 2) {
                showError('nameError', 'Please enter a valid name (at least 2 characters)');
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                showError('emailError', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate subject
            if (!subjectInput.value) {
                showError('subjectError', 'Please select a subject');
                isValid = false;
            }
            
            // Validate message
            if (messageInput.value.trim().length < 10) {
                showError('messageError', 'Message must be at least 10 characters long');
                isValid = false;
            }
            
            if (isValid) {
                // Show success message
                formSuccess.style.display = 'block';
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 5000);
                
                // Scroll to success message
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });

        function showError(elementId, message) {
            const errorElement = document.getElementById(elementId);
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.style.display = 'block';
            }
        }

        function clearErrors() {
            const errorElements = document.querySelectorAll('.error-message');
            errorElements.forEach(element => {
                element.style.display = 'none';
                element.textContent = '';
            });
        }
    }

    // ===== Animated Stats Counter =====
    function animateStats() {
        statItems.forEach(item => {
            const target = parseInt(item.getAttribute('data-target'));
            const numberElement = item.querySelector('.stat-number');
            
            if (!numberElement) return;
            
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    numberElement.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    numberElement.textContent = Math.floor(current).toLocaleString();
                }
            }, 16);
        });
    }

    // Trigger stats animation when stats section is visible
    if (statItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            observer.observe(statsSection);
        }
    }

    // ===== Smooth Scrolling for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== Add fade-in animation for elements =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply fade-in to feature cards, topic tags, etc.
    const animatedElements = document.querySelectorAll('.feature-card, .coverage-item, .topic-tag, .step');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(el);
    });
});
