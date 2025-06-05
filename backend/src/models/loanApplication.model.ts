import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, sql } from '@sequelize/core';
import {
  Attribute,
  AutoIncrement,
  ColumnName,
  Default,
  NotNull,
  PrimaryKey,
  Table
} from '@sequelize/core/decorators-legacy';

@Table({
  tableName: 'loan_applications'
})
export class LoanApplicationModel extends Model<
  InferAttributes<LoanApplicationModel>,
  InferCreationAttributes<LoanApplicationModel>
> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @NotNull
  @AutoIncrement
  @ColumnName('loan_id')
  declare loanId: CreationOptional<number>;

  @Attribute(DataTypes.UUID)
  @NotNull
  @Default(sql.uuidV4)
  @ColumnName('loan_uuid')
  declare loanUuid: CreationOptional<string>;
}
