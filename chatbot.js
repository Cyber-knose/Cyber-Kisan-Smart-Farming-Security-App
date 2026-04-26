// chatbot.js - Enhanced with floating icon

class CyberKissanChatbot {
    constructor() {
        this.messagesContainer = document.getElementById('chat-messages');
        this.inputField = document.getElementById('chat-input');
        this.chatbotWindow = document.getElementById('chatbot');
        this.floatingIcon = null;

        // Predefined responses
        this.responses = {
            'hi': 'Namaste! 👋 How can I help you with cyber safety today?',
            'hello': 'Namaste! 👋 How can I help you with cyber safety today?',
            'namaste': 'Namaste! 👋 How can I help you with cyber safety today?',
            'help': 'I can help with: cyber crime types, safety tips, password security, scam identification, and more. Just ask your question!',
            'support': 'I can help with: cyber crime types, safety tips, password security, scam identification, and more. Just ask your question!',

            // Crime types
            'phishing': 'Phishing & Vishing: Using fake SMS (smishing) or calls (vishing) with links to malicious sites or to trick users into revealing banking details (OTP, PIN, CVV). Always verify the sender and never share sensitive info over unsolicited calls/messages.',
            'vishing': 'Phishing & Vishing: Using fake SMS (smishing) or calls (vishing) with links to malicious sites or to trick users into revealing banking details (OTP, PIN, CVV). Always verify the sender and never share sensitive info over unsolicited calls/messages.',
            'smishing': 'Phishing & Vishing: Using fake SMS (smishing) or calls (vishing) with links to malicious sites or to trick users into revealing banking details (OTP, PIN, CVV). Always verify the sender and never share sensitive info over unsolicited calls/messages.',

            'digital arrest': 'Digital Arrest Scams: Fraudsters impersonate law enforcement (CBI, police), claiming victims are involved in terror/drug cases, placing them under "digital arrest" to extort large sums. Stay safe by verifying calls through official channels and never pay under pressure!',
            'arrest scam': 'Digital Arrest Scams: Fraudsters impersonate law enforcement (CBI, police), claiming victims are involved in terror/drug cases, placing them under "digital arrest" to extort large sums. Stay safe by verifying calls through official channels and never pay under pressure!',

            'sextortion': 'Sextortion & Blackmail: Luring victims (especially youth) into compromising situations online (via chat apps/social media) and threatening to release intimate photos/videos for money or sexual favors. Protect yourself by not sharing personal images and reporting to authorities immediately.',
            'blackmail': 'Sextortion & Blackmail: Luring victims (especially youth) into compromising situations online (via chat apps/social media) and threatening to release intimate photos/videos for money or sexual favors. Protect yourself by not sharing personal images and reporting to authorities immediately.',

            'fake job': 'Fake Job/Investment Scams: Promises of high-paying jobs (sometimes overseas) or quick investment returns to steal registration fees or money. Research opportunities thoroughly and avoid upfront payments.',
            'job scam': 'Fake Job/Investment Scams: Promises of high-paying jobs (sometimes overseas) or quick investment returns to steal registration fees or money. Research opportunities thoroughly and avoid upfront payments.',
            'investment scam': 'Fake Job/Investment Scams: Promises of high-paying jobs (sometimes overseas) or quick investment returns to steal registration fees or money. Research opportunities thoroughly and avoid upfront payments.',

            'qr code': 'QR Code Tampering: Modifying legitimate QR codes on bills or products to redirect payments to fraudsters. Scan codes only from trusted sources and check URLs before proceeding.',
            'qr tampering': 'QR Code Tampering: Modifying legitimate QR codes on bills or products to redirect payments to fraudsters. Scan codes only from trusted sources and check URLs before proceeding.',

            'fake customer care': 'Fake Customer Care: Using Google/social media to list fake helpline numbers to steal banking info when users seek support. Always use official contact numbers from verified websites.',
            'helpline scam': 'Fake Customer Care: Using Google/social media to list fake helpline numbers to steal banking info when users seek support. Always use official contact numbers from verified websites.',

            'malicious app': 'Malicious Apps: Distributing malicious APK files through video calls or links to install malware. Download apps only from official stores like Google Play and avoid unknown sources.',
            'apk': 'Malicious Apps: Distributing malicious APK files through video calls or links to install malware. Download apps only from official stores like Google Play and avoid unknown sources.',

            'malware': 'Cyber crimes are illegal activities using computers or the internet to harm others. Common types include phishing (fake emails to steal info), malware (harmful software), data theft (stealing personal data), QR code fraud (fake codes leading to scams), and deepfakes (AI-altered media for fraud). Stay safe by verifying sources, using strong passwords, and reporting suspicious activity!',
            'ransomware': 'Cyber crimes are illegal activities using computers or the internet to harm others. Common types include phishing (fake emails to steal info), malware (harmful software), data theft (stealing personal data), QR code fraud (fake codes leading to scams), and deepfakes (AI-altered media for fraud). Stay safe by verifying sources, using strong passwords, and reporting suspicious activity!',
            'data theft': 'Cyber crimes are illegal activities using computers or the internet to harm others. Common types include phishing (fake emails to steal info), malware (harmful software), data theft (stealing personal data), QR code fraud (fake codes leading to scams), and deepfakes (AI-altered media for fraud). Stay safe by verifying sources, using strong passwords, and reporting suspicious activity!',
            'deepfake': 'Cyber crimes are illegal activities using computers or the internet to harm others. Common types include phishing (fake emails to steal info), malware (harmful software), data theft (stealing personal data), QR code fraud (fake codes leading to scams), and deepfakes (AI-altered media for fraud). Stay safe by verifying sources, using strong passwords, and reporting suspicious activity!',
            'cyber crime': 'Cyber crimes are illegal activities using computers or the internet to harm others. Common types include phishing (fake emails to steal info), malware (harmful software), data theft (stealing personal data), QR code fraud (fake codes leading to scams), and deepfakes (AI-altered media for fraud). Stay safe by verifying sources, using strong passwords, and reporting suspicious activity!',

            'password': 'For strong passwords: Use 12+ characters, mix uppercase/lowercase, numbers & symbols. Avoid personal info. Use our Password Generator tool for secure passwords!',
            'strong password': 'For strong passwords: Use 12+ characters, mix uppercase/lowercase, numbers & symbols. Avoid personal info. Use our Password Generator tool for secure passwords!',

            'safety tips': 'Safety Tips: Use strong unique passwords, enable two-factor authentication, avoid suspicious links, never share personal info without verification, update devices regularly, use antivirus software, and report suspicious activity immediately.',
            'security tips': 'Safety Tips: Use strong unique passwords, enable two-factor authentication, avoid suspicious links, never share personal info without verification, update devices regularly, use antivirus software, and report suspicious activity immediately.',

            'login': 'To login: Click on the Login button in navigation, enter your mobile number, and use the OTP sent to your phone. Its secure and easy!',
            'otp': 'OTP (One Time Password) is a secure way to login. Enter your mobile number and use the 6-digit code sent to your phone. OTP expires in 5 minutes.',
            'account': 'Your account is secure with OTP login. Never share your OTP with anyone. For help, contact our support team.'
        };

        this.init();
        this.createFloatingIcon();
    }

    init() {
        // Add event listeners
        if (this.inputField) {
            this.inputField.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
        }

        // Add greeting message
        this.addMessage('Hello! How can I help you with cyber safety today?', 'bot');
    }

    createFloatingIcon() {
        // Create floating icon element
        this.floatingIcon = document.createElement('div');
        this.floatingIcon.className = 'floating-chatbot-icon';
        this.floatingIcon.innerHTML = `
            <div class="chatbot-icon-wrapper">
                <i class="fas fa-comments"></i>
                <span class="notification-dot" style="display: none;"></span>
            </div>
        `;

        // Add click event
        this.floatingIcon.addEventListener('click', () => {
            this.toggleChatbot();
        });

        // Add to body
        document.body.appendChild(this.floatingIcon);

        // Add floating icon CSS
        this.addFloatingIconCSS();

        // Show welcome notification after delay
        setTimeout(() => {
            this.showNotification();
        }, 3000);
    }

    addFloatingIconCSS() {
        const style = document.createElement('style');
        style.textContent = `
            /* Floating Chatbot Icon Styles */
            .floating-chatbot-icon {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 60px;
                height: 60px;
                background: linear-gradient(135deg, #4CAF50, #66BB6A);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                box-shadow: 0 4px 20px rgba(76, 175, 80, 0.4);
                transition: all 0.3s ease;
                z-index: 1001;
                animation: bounce 2s infinite;
            }

            .floating-chatbot-icon:hover {
                transform: scale(1.1) rotate(10deg);
                box-shadow: 0 6px 30px rgba(76, 175, 80, 0.6);
            }

            .chatbot-icon-wrapper {
                position: relative;
                color: white;
                font-size: 24px;
            }

            .notification-dot {
                position: absolute;
                top: -5px;
                right: -5px;
                width: 15px;
                height: 15px;
                background: #FF5722;
                border-radius: 50%;
                animation: pulse 1.5s infinite;
            }

            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                    transform: translateY(0);
                }
                40% {
                    transform: translateY(-10px);
                }
                60% {
                    transform: translateY(-5px);
                }
            }

            @keyframes pulse {
                0% {
                    transform: scale(0.95);
                    box-shadow: 0 0 0 0 rgba(255, 87, 34, 0.7);
                }
                70% {
                    transform: scale(1);
                    box-shadow: 0 0 0 10px rgba(255, 87, 34, 0);
                }
                100% {
                    transform: scale(0.95);
                    box-shadow: 0 0 0 0 rgba(255, 87, 34, 0);
                }
            }

            /* Enhanced Chatbot Window */
            .chatbot {
                position: fixed !important;
                bottom: 100px !important;
                right: 30px !important;
                width: 350px !important;
                height: 500px !important;
                border-radius: 15px !important;
                box-shadow: 0 10px 40px rgba(0,0,0,0.2) !important;
                border: 2px solid #4CAF50 !important;
                z-index: 1002 !important;
            }

            .chatbot.active {
                display: flex !important;
                animation: slideUp 0.3s ease-out;
            }

            @keyframes slideUp {
                from {
                    transform: translateY(20px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            /* Minimized state when floating icon is visible */
            .chatbot.minimized {
                display: none !important;
            }

            /* Responsive adjustments */
            @media (max-width: 768px) {
                .floating-chatbot-icon {
                    bottom: 20px;
                    right: 20px;
                    width: 50px;
                    height: 50px;
                }

                .chatbot-icon-wrapper {
                    font-size: 20px;
                }

                .chatbot {
                    bottom: 80px !important;
                    right: 20px !important;
                    width: 90% !important;
                    max-width: 350px !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    showNotification() {
        const notificationDot = this.floatingIcon.querySelector('.notification-dot');
        if (notificationDot) {
            notificationDot.style.display = 'block';

            // Add floating message
            const message = document.createElement('div');
            message.className = 'floating-message';
            message.innerHTML = `
                <div style="
                    position: absolute;
                    bottom: 70px;
                    right: 0;
                    background: #333;
                    color: white;
                    padding: 10px 15px;
                    border-radius: 8px;
                    font-size: 14px;
                    white-space: nowrap;
                    animation: fadeInOut 3s ease-in-out;
                ">
                    Need help? Chat with me! 💬
                    <div style="
                        position: absolute;
                        bottom: -5px;
                        right: 20px;
                        width: 0;
                        height: 0;
                        border-left: 5px solid transparent;
                        border-right: 5px solid transparent;
                        border-top: 5px solid #333;
                    "></div>
                </div>
            `;

            this.floatingIcon.appendChild(message);

            // Remove message after animation
            setTimeout(() => {
                if (message.parentNode) {
                    message.remove();
                }
                notificationDot.style.display = 'none';
            }, 3000);
        }
    }

    toggleChatbot() {
        if (this.chatbotWindow) {
            const isActive = this.chatbotWindow.classList.contains('active');

            if (isActive) {
                this.chatbotWindow.classList.remove('active');
                this.floatingIcon.style.display = 'flex'; // Show icon when chatbot closes
            } else {
                this.chatbotWindow.classList.add('active');
                this.floatingIcon.style.display = 'none'; // Hide icon when chatbot opens

                // Focus input field
                if (this.inputField) {
                    setTimeout(() => {
                        this.inputField.focus();
                    }, 300);
                }
            }
        }
    }

    addMessage(message, sender) {
        if (!this.messagesContainer) return;

        const messageDiv = document.createElement('p');
        messageDiv.innerHTML = `<strong>${sender === 'user' ? 'You' : 'Bot'}:</strong> ${message}`;

        this.messagesContainer.appendChild(messageDiv);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    generateResponse(userMessage) {
        // Check for exact matches first
        if (this.responses[userMessage]) {
            return this.responses[userMessage];
        }

        // Check for partial matches
        for (let key in this.responses) {
            if (userMessage.includes(key)) {
                return this.responses[key];
            }
        }

        // Default response
        return 'I\'m here to help with cyber safety tips! Ask about phishing, malware, digital arrest scams, sextortion, password security, or other threats. Type "help" for topics I can assist with.';
    }

    sendMessage() {
        if (!this.inputField || !this.messagesContainer) return;

        const message = this.inputField.value.trim();

        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');

        // Clear input
        this.inputField.value = '';

        // Generate response
        const response = this.generateResponse(message.toLowerCase());

        // Add bot response with slight delay for realism
        setTimeout(() => {
            this.addMessage(response, 'bot');
        }, 500);
    }
}

// Enhanced global functions
function toggleChatbot() {
    if (window.cyberKissanChatbot) {
        window.cyberKissanChatbot.toggleChatbot();
    }
}

function sendMessage() {
    if (window.cyberKissanChatbot) {
        window.cyberKissanChatbot.sendMessage();
    }
}

// Initialize on all pages
document.addEventListener('DOMContentLoaded', function () {
    // Create chatbot window if it doesn't exist
    if (!document.getElementById('chatbot')) {
        createChatbotWindow();
    }

    window.cyberKissanChatbot = new CyberKissanChatbot();
});

// Create chatbot window dynamically
function createChatbotWindow() {
    const chatbotHTML = `
        <div id="chatbot" class="chatbot">
            <div class="chat-messages" id="chat-messages"></div>
            <div class="chat-input">
                <input type="text" id="chat-input" placeholder="Type your message..." onkeypress="if(event.key==='Enter') sendMessage()">
                <button class="btn btn-primary" onclick="sendMessage()">Send</button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
}

// OTP input navigation functions (if on login page)
function moveToNext(current, index) {
    const inputs = document.querySelectorAll('.otp-input');
    if (current.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
    }
}
