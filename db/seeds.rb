require "csv"

# CSV.foreach(Rails.root.join('lib/tasks/firework_database.csv')) do |row|
#    Firework.create({
#       quantity_per_case: row[0], 
#       upc_code: row[1],
#       name: row[2] 
#     }) 
#   end

csv_text = File.read(Rails.root.join( 'lib','tasks', 'firework_database.csv'))


csv = CSV.parse(csv_text, :headers => false, :encoding => 'ISO-8859-1')


csv.each do |row|
    f = Firework.new
    f.quantity_per_case = row[0]
    f.upc_code = row[1]
    f.name = row[2]
    f.case_id = nil
    p f
end

p "loaded #{Firework.count} fireworks"