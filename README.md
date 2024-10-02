# Short URL Service

This is a simple URL shortening service built with NestJS and Node.js.

## Features

- Shorten long URLs
- Redirect short URLs to the original long URLs
- Track the number of times a short URL has been accessed

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/short_url.git
    ```
2. Navigate to the project directory:
    ```bash
    cd short_url
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm run start:dev
    ```
2. The service will be running at `http://localhost:3000`.

## API Endpoints

- `POST /shorten`: Shorten a long URL.
    - Request body:
        ```json
        {
            "longUrl": "https://example.com"
        }
        ```
    - Response:
        ```json
        {
            "shortUrl": "http://localhost:3000/abc123"
        }
        ```

- `GET /:shortUrl`: Redirect to the original long URL.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact [your-email@example.com](mailto:your-email@example.com).
