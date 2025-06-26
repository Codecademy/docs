---
Title: 'Gems'
Description: 'Packaged libraries of Ruby code that extend or modify functionality in Ruby applications'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Dependency'
  - 'Libraries'
  - 'Packages'
  - 'Ruby'
CatalogContent:
  - 'learn-ruby'
  - 'paths/computer-science'
---

**Ruby gems** are packaged libraries of Ruby code that extend or modify functionality in Ruby applications. A gem contains Ruby code, documentation, and metadata bundled together for easy distribution and installation. Gems serve as the building blocks of the Ruby ecosystem, allowing developers to share reusable code and avoid reinventing common functionality.

Ruby gems function through the RubyGems package management system, which has been included with Ruby since version 1.9. When installed, RubyGems downloads the packaged code, resolves dependencies, builds extensions if needed, and generates documentation. The system maintains a central repository at rubygems.org with thousands of publicly available gems.

## Use Cases of Ruby Gems

Ruby gems accelerate development by providing pre-built solutions for common programming tasks. Web applications rely heavily on gems like `devise` for user authentication, `sidekiq` for background jobs, and `nokogiri` for HTML parsing. Gems enable rapid prototyping by offering ready-made components that integrate immediately rather than building from scratch.

The gem ecosystem supports specialized development across different domains. Data processing benefits from gems like `json` for parsing data and various database adapters. Web APIs use gems such as `grape` for REST services. Testing relies on gems like `rspec` and `minitest`. Gems also facilitate integration with external services, cloud platforms, and third-party APIs.

## How to Install Gems

Installing gems uses the `gem install` command followed by the gem name:

```pseudo
gem install gem_name
```

For example, to install `bundler`:

```ruby
gem install bundler
```

The installation automatically downloads the gem, installs dependencies, and generates documentation. Specify versions using constraints:

```ruby
gem install rails -v 7.0.0
gem install nokogiri '~> 1.13.0'
```

Use `gem list` to view installed gems and `gem uninstall gem_name` to remove them.

## Popular Ruby Gems

Several gems have become essential tools in the Ruby ecosystem due to their reliability and widespread adoption:

- [**Bundler**](https://bundler.io/): The dependency management tool that ensures consistent gem environments across different machines and deployments. With over 2 billion downloads, Bundler reads a `Gemfile` to install exact gem versions and their dependencies.

- [**Rails**](https://rubyonrails.org/): The full-stack web application framework that includes everything needed to create database-backed web applications following the Model-View-Controller pattern.

- [**RSpec**](https://rspec.info/): A behavior-driven development framework for testing Ruby code, offering expressive syntax and powerful matchers for writing comprehensive test suites.

- [**Sidekiq**](https://sidekiq.org/): A high-performance background job processor that uses Redis for job storage and multithreading for concurrent job execution.

- [**Nokogiri**](https://nokogiri.org/index.html): An HTML, XML, SAX, and Reader parser with XPath and CSS selector support, essential for web scraping and document processing.

- [**Puma**](https://puma.io/): A Ruby web server built for speed and parallelism, commonly used in production environments for serving Rails applications.

## Example 1: Using the JSON Gem

This example demonstrates parsing and generating JSON data using the built-in `json` gem:

```ruby
require 'json'

# Parse JSON string into Ruby hash
json_string = '{"name": "Alice", "age": 30, "city": "New York"}'
user_data = JSON.parse(json_string)
puts user_data["name"]  # Output: Alice

# Convert Ruby hash to JSON string
user_hash = { name: "Bob", age: 25, hobbies: ["reading", "coding"] }
json_output = JSON.generate(user_hash)
puts json_output  # Output: {"name":"Bob","age":25,"hobbies":["reading","coding"]}
```

This example shows how the `json` gem simplifies JSON data handling, automatically converting between Ruby objects and JSON strings.

## Example 2: HTTP Requests with Rest-Client

This example shows making HTTP requests using the `rest-client` gem:

```ruby
require 'rest-client'
require 'json'

# Make a GET request
response = RestClient.get('https://jsonplaceholder.typicode.com/posts/1')
post_data = JSON.parse(response.body)
puts "Post title: #{post_data['title']}"

# Make a POST request with data
new_post = {
  title: 'My New Post',
  body: 'This is the content of my post',
  userId: 1
}

response = RestClient.post(
  'https://jsonplaceholder.typicode.com/posts',
  new_post.to_json,
  { content_type: :json, accept: :json }
)

created_post = JSON.parse(response.body)
puts "Created post ID: #{created_post['id']}"
```

The `rest-client` gem provides a simple interface for HTTP requests, handling different methods, headers, and responses automatically.

## Example 3: Background Jobs with Sidekiq

This example demonstrates setting up background job processing using the `sidekiq` gem:

```ruby
# Gemfile
gem 'sidekiq'

# app/workers/email_worker.rb
class EmailWorker
  include Sidekiq::Worker

  def perform(user_id, email_type)
    user = User.find(user_id)
    case email_type
    when 'welcome'
      UserMailer.welcome_email(user).deliver_now
    when 'reminder'
      UserMailer.reminder_email(user).deliver_now
    end
    puts "Email sent to #{user.email}"
  end
end

# In your application code
EmailWorker.perform_async(user.id, 'welcome')
```

Sidekiq enables asynchronous job processing, allowing time-consuming tasks like sending emails to run in the background without blocking the main application.

## Frequently Asked Questions

### 1. What's the difference between a gem and a library?

In Ruby, the terms are often used interchangeably, but technically a gem is the packaged format that contains a library along with metadata, documentation, and dependency information. A library is the actual code that provides functionality.

### 2. Can I create private gems for my organization?

Yes, you can create private gems and host them on private gem servers, in private Git repositories, or use services like Gemfury or GitHub Packages to distribute gems within your organization.

### 3. Can gems contain executable commands?

Yes, many gems include executable files that become available in your system's PATH after installation. For example, the `rails` gem provides the `rails` command, and `bundler` provides the `bundle` command.

### 4. How do I create my own gem?

You can use `bundle gem gem_name` to scaffold a new gem. RubyGems provides tools for packaging, documenting, and publishing your custom gem to rubygems.org or private repositories.
