# Zwilt Landing Page

The Zwilt Landing Page is designed to be a responsive, user-friendly interface showcasing the services offered. The implementation uses modern web development tools such as React, Vite, Tailwind CSS, and Daisy UI. Key features include a slanted border design, FAQ accordion, carousel, and hover effects on various elements.

## Notable Decisions

- **Component Structure:**
  - The project follows a modular component structure to ensure maintainability and reusability. Each section of the landing page is implemented as a separate component.

- **Styling:**
  - Tailwind CSS was chosen for its utility-first approach, allowing for rapid styling and consistency across the application.
  - Daisy UI was integrated to provide pre-styled components and enhance development speed.

- **Slanted Borders:**
  - Implemented using CSS `clip-path`. This required careful handling of responsive design to ensure the slanted edges look good on all screen sizes.

## Challenges Faced

- **CSS Clip Path for Slanted Borders:**
  - Ensuring the slanted borders are responsive and look consistent across different screen sizes was challenging. It required testing and fine-tuning of the `clip-path` values.

## Technologies Used

- React
- Vite
- Tailwind CSS
- Daisy UI

## Setup Instructions

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Chizycodes/zwilt-landing-page.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd zwilt-landing-page
    ```

3. **Install dependencies:**

    ```bash
    yarn install
    ```

4. **Start the development server:**

    ```bash
    yarn dev
    ```

5. **Access the application:**
    Open your web browser and navigate to `http://localhost:5173`.
