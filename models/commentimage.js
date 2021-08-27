'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommentImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CommentImage.hasOne(models.Image, {
        foreignKey: "id",
        sourceKey: "image_id",
      })
    }
  };
  CommentImage.init({
    comment_id: DataTypes.BIGINT,
    image_id: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      // fieldName: "created_at",
      // underscored: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      // fieldName: "updated_at",
      // underscored: true,
    },
    deleted_at: {
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'CommentImage',
    tableName: 'comment_images',
    underscored: true,
  });
  return CommentImage;
};