import Sequelize, { Model } from 'sequelize';

class Profile extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
      },
      { sequelize }
    );
  }

  async checkProfile(profile) {
    return !!(await Profile.findOne({ where: { id: profile } }));
  }
}

export default Profile;