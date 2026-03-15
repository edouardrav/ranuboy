class CreateJwtDenyLists < ActiveRecord::Migration[8.1]
  def change
    create_table :jwt_deny_lists do |t|
      t.string :jti
      t.datetime :exp

      t.timestamps
    end
    add_index :jwt_deny_lists, :jti
  end
end
