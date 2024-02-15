---
Title: 'Gems'
Description: 'Gems are open-source Ruby libraries or applications that lend extra utility to other applications.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Libraries'
CatalogContent:
  - 'learn-ruby'
  - 'paths/front-end-engineer-career-path'
---

**Gems** are open-source Ruby libraries or applications that lend extra utility to other Ruby programs. Each gem is composed of the following:

- The source code it was built with (including any tests).
- Any documentation with metadata such as the name, version, and platform.
- A `.gemspec` file holding all gem-related metadata.

Gems can be referenced, installed, and published from an online registry called [RubyGems](https://rubygems.org/).

To install gems to the local machine:

```pseudo
gem install name-of-gem
```

A list of previously installed gems is displayed with the following command:

```shell
gem list
```

Some popular Ruby gems include:

- [Ruby on Rails](https://www.codecademy.com/resources/docs/ruby/ruby-on-rails) for building robust, full-stack web applications.
- [Active Record](https://rubygems.org/gems/activerecord/versions/5.0.0.1) for object-relational database management in Rails.
- [Pry](https://rubygems.org/gems/pry) for REPL-style inspection of programs at runtime.
- [OmniAuth](https://rubygems.org/gems/omniauth) for third-party authentication in applications.
- [Sinatra](https://rubygems.org/gems/sinatra) for a building relatively minimal, light websites.

Gems can be represented in a `Gemfile` either in general or with a specific version:

```shell
source 'https://rubygems.org'

gem 'pry'
gem 'rails', '3.0.0.beta3'
gem 'omniauth',  '>=1.0'
```
