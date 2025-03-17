require 'redmine'

Redmine::Plugin.register :redmine_to_selectbe4 do
  name 'Select To Select2 Plugin whith unique library'
  author 'Mario Vicidomini' 
  description 'Replace Select Tag with Select2 (indipendent version)'
  version '1.0.0'
  url 'https://github.com/mavi82/select_to_select2'
  author_url 'https://github.com/mavi82'
end

class SelectToSelect2ViewListener < Redmine::Hook::ViewListener

  # Adds javascript and stylesheet tags
  def view_layouts_base_html_head(context)
      javascript_include_tag('selectB4.js', :plugin => :redmine_to_selectbe4) +
      javascript_include_tag('slecttoselect2main.js', :plugin => :redmine_to_selectbe4) +
      stylesheet_link_tag('selectB4.css', :plugin => :redmine_to_selectbe4)
  end
  
end

