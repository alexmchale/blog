require 'nanoc3/tasks'
require 'fileutils'

EDITOR = ENV["EDITOR"] || "vi"

task :write do
  full_title = ENV["title"]
  clean_title = full_title.downcase.gsub(/[\s_]+/, '-').gsub(/[^a-z0-9\-]/, '') if full_title

  dir = "content/#{Time.now.year}"
  path = "#{dir}/%02d-%02d.#{clean_title}.markdown" % [ Time.now.month, Time.now.mday ]

  if File.exists? path
    puts "That entry already exists as: #{path}"
  else
    FileUtils.mkdir_p dir
    File.open(path, "w") do |f|
      f.puts %[---]
      f.puts %[title: "#{full_title}"]
      f.puts %[kind: article]
      f.puts %[created_at: "#{Time.now.to_s}"]
      f.puts %[---]
      f.puts
    end
    puts "Created new blog entry: #{path}"
    exec "#{EDITOR} #{path}"
  end
end
