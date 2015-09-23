# Base image 
FROM ruby:2.1

ENV HOME /home/rails/webapp

# Install PGsql dependencies and js engine
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

# for nokogiri
RUN apt-get install -y libxml2-dev libxslt1-dev

WORKDIR $HOME

# Install gems
ADD Gemfile* $HOME/
RUN gem install nokogiri
RUN bundle install

# Add the app code
ADD . $HOME

# setup the db with seed data
RUN bundle exec rake db:drop db:create db:migrate db:seed

# Default command
CMD ["bundle", "exec", "rails", "s", "-p", "8000"]
