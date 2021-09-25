class CreateOpportunitySources < ActiveRecord::Migration[6.1]
  def change
    create_table :opportunity_sources do |t|
      t.references :provider, null: false, foreign_key: true
      t.references :opportunity, null: false, foreign_key: true

      t.timestamps
    end
  end
end
