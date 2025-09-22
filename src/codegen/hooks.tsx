import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  accessToken?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Board = {
  __typename?: 'Board';
  _count: BoardCount;
  categories?: Maybe<Array<BoardCategory>>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: User;
  /** Optional board description */
  description?: Maybe<Scalars['String']['output']>;
  followers?: Maybe<Array<BoardFollower>>;
  id: Scalars['ID']['output'];
  /** @Example "Weekly Planning" */
  name: Scalars['String']['output'];
  posts?: Maybe<Array<Post>>;
  schedules?: Maybe<Array<ScheduleItem>>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type BoardCategory = {
  __typename?: 'BoardCategory';
  board: Board;
  boardId: Scalars['String']['output'];
  category: Category;
  categoryId: Scalars['String']['output'];
};

export type BoardCategoryBoardIdCategoryIdCompoundUniqueInput = {
  boardId: Scalars['String']['input'];
  categoryId: Scalars['String']['input'];
};

export type BoardCategoryCountAggregate = {
  __typename?: 'BoardCategoryCountAggregate';
  _all: Scalars['Int']['output'];
  boardId: Scalars['Int']['output'];
  categoryId: Scalars['Int']['output'];
};

export type BoardCategoryCreateManyBoardInput = {
  categoryId: Scalars['String']['input'];
};

export type BoardCategoryCreateManyBoardInputEnvelope = {
  data: Array<BoardCategoryCreateManyBoardInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoardCategoryCreateManyCategoryInput = {
  boardId: Scalars['String']['input'];
};

export type BoardCategoryCreateManyCategoryInputEnvelope = {
  data: Array<BoardCategoryCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoardCategoryCreateNestedManyWithoutBoardInput = {
  connect?: InputMaybe<Array<BoardCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BoardCategoryCreateOrConnectWithoutBoardInput>>;
  create?: InputMaybe<Array<BoardCategoryCreateWithoutBoardInput>>;
  createMany?: InputMaybe<BoardCategoryCreateManyBoardInputEnvelope>;
};

export type BoardCategoryCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<BoardCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BoardCategoryCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<BoardCategoryCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<BoardCategoryCreateManyCategoryInputEnvelope>;
};

export type BoardCategoryCreateOrConnectWithoutBoardInput = {
  create: BoardCategoryCreateWithoutBoardInput;
  where: BoardCategoryWhereUniqueInput;
};

export type BoardCategoryCreateOrConnectWithoutCategoryInput = {
  create: BoardCategoryCreateWithoutCategoryInput;
  where: BoardCategoryWhereUniqueInput;
};

export type BoardCategoryCreateWithoutBoardInput = {
  category: CategoryCreateNestedOneWithoutBoardsInput;
};

export type BoardCategoryCreateWithoutCategoryInput = {
  board: BoardCreateNestedOneWithoutCategoriesInput;
};

export type BoardCategoryListRelationFilter = {
  every?: InputMaybe<BoardCategoryWhereInput>;
  none?: InputMaybe<BoardCategoryWhereInput>;
  some?: InputMaybe<BoardCategoryWhereInput>;
};

export type BoardCategoryMaxAggregate = {
  __typename?: 'BoardCategoryMaxAggregate';
  boardId?: Maybe<Scalars['String']['output']>;
  categoryId?: Maybe<Scalars['String']['output']>;
};

export type BoardCategoryMinAggregate = {
  __typename?: 'BoardCategoryMinAggregate';
  boardId?: Maybe<Scalars['String']['output']>;
  categoryId?: Maybe<Scalars['String']['output']>;
};

export type BoardCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BoardCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<BoardCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<BoardCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<BoardCategoryScalarWhereInput>>;
  boardId?: InputMaybe<StringFilter>;
  categoryId?: InputMaybe<StringFilter>;
};

export type BoardCategoryUncheckedUpdateManyWithoutBoardInput = {
  categoryId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BoardCategoryUncheckedUpdateManyWithoutCategoryInput = {
  boardId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BoardCategoryUpdateManyWithWhereWithoutBoardInput = {
  data: BoardCategoryUncheckedUpdateManyWithoutBoardInput;
  where: BoardCategoryScalarWhereInput;
};

export type BoardCategoryUpdateManyWithWhereWithoutCategoryInput = {
  data: BoardCategoryUncheckedUpdateManyWithoutCategoryInput;
  where: BoardCategoryScalarWhereInput;
};

export type BoardCategoryUpdateManyWithoutBoardNestedInput = {
  connect?: InputMaybe<Array<BoardCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BoardCategoryCreateOrConnectWithoutBoardInput>>;
  create?: InputMaybe<Array<BoardCategoryCreateWithoutBoardInput>>;
  createMany?: InputMaybe<BoardCategoryCreateManyBoardInputEnvelope>;
  delete?: InputMaybe<Array<BoardCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BoardCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BoardCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<BoardCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<BoardCategoryUpdateWithWhereUniqueWithoutBoardInput>>;
  updateMany?: InputMaybe<Array<BoardCategoryUpdateManyWithWhereWithoutBoardInput>>;
  upsert?: InputMaybe<Array<BoardCategoryUpsertWithWhereUniqueWithoutBoardInput>>;
};

export type BoardCategoryUpdateManyWithoutCategoryNestedInput = {
  connect?: InputMaybe<Array<BoardCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BoardCategoryCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<BoardCategoryCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<BoardCategoryCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<BoardCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BoardCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BoardCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<BoardCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<BoardCategoryUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<BoardCategoryUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<BoardCategoryUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type BoardCategoryUpdateWithWhereUniqueWithoutBoardInput = {
  data: BoardCategoryUpdateWithoutBoardInput;
  where: BoardCategoryWhereUniqueInput;
};

export type BoardCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
  data: BoardCategoryUpdateWithoutCategoryInput;
  where: BoardCategoryWhereUniqueInput;
};

export type BoardCategoryUpdateWithoutBoardInput = {
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutBoardsNestedInput>;
};

export type BoardCategoryUpdateWithoutCategoryInput = {
  board?: InputMaybe<BoardUpdateOneRequiredWithoutCategoriesNestedInput>;
};

export type BoardCategoryUpsertWithWhereUniqueWithoutBoardInput = {
  create: BoardCategoryCreateWithoutBoardInput;
  update: BoardCategoryUpdateWithoutBoardInput;
  where: BoardCategoryWhereUniqueInput;
};

export type BoardCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
  create: BoardCategoryCreateWithoutCategoryInput;
  update: BoardCategoryUpdateWithoutCategoryInput;
  where: BoardCategoryWhereUniqueInput;
};

export type BoardCategoryWhereInput = {
  AND?: InputMaybe<Array<BoardCategoryWhereInput>>;
  NOT?: InputMaybe<Array<BoardCategoryWhereInput>>;
  OR?: InputMaybe<Array<BoardCategoryWhereInput>>;
  board?: InputMaybe<BoardScalarRelationFilter>;
  boardId?: InputMaybe<StringFilter>;
  category?: InputMaybe<CategoryScalarRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
};

export type BoardCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<BoardCategoryWhereInput>>;
  NOT?: InputMaybe<Array<BoardCategoryWhereInput>>;
  OR?: InputMaybe<Array<BoardCategoryWhereInput>>;
  board?: InputMaybe<BoardScalarRelationFilter>;
  boardId?: InputMaybe<StringFilter>;
  boardId_categoryId?: InputMaybe<BoardCategoryBoardIdCategoryIdCompoundUniqueInput>;
  category?: InputMaybe<CategoryScalarRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
};

export type BoardCount = {
  __typename?: 'BoardCount';
  categories: Scalars['Int']['output'];
  followers: Scalars['Int']['output'];
  posts: Scalars['Int']['output'];
  schedules: Scalars['Int']['output'];
};

export type BoardCountAggregate = {
  __typename?: 'BoardCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type BoardCreateInput = {
  categories?: InputMaybe<BoardCategoryCreateNestedManyWithoutBoardInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  followers?: InputMaybe<BoardFollowerCreateNestedManyWithoutBoardInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  posts?: InputMaybe<PostCreateNestedManyWithoutBoardInput>;
  schedules?: InputMaybe<ScheduleItemCreateNestedManyWithoutBoardInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BoardCreateManyCreatedByInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BoardCreateManyCreatedByInputEnvelope = {
  data: Array<BoardCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoardCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<BoardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BoardCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<BoardCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<BoardCreateManyCreatedByInputEnvelope>;
};

export type BoardCreateNestedOneWithoutCategoriesInput = {
  connect?: InputMaybe<BoardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BoardCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<BoardCreateWithoutCategoriesInput>;
};

export type BoardCreateNestedOneWithoutFollowersInput = {
  connect?: InputMaybe<BoardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BoardCreateOrConnectWithoutFollowersInput>;
  create?: InputMaybe<BoardCreateWithoutFollowersInput>;
};

export type BoardCreateNestedOneWithoutPostsInput = {
  connect?: InputMaybe<BoardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BoardCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<BoardCreateWithoutPostsInput>;
};

export type BoardCreateNestedOneWithoutSchedulesInput = {
  connect?: InputMaybe<BoardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BoardCreateOrConnectWithoutSchedulesInput>;
  create?: InputMaybe<BoardCreateWithoutSchedulesInput>;
};

export type BoardCreateOrConnectWithoutCategoriesInput = {
  create: BoardCreateWithoutCategoriesInput;
  where: BoardWhereUniqueInput;
};

export type BoardCreateOrConnectWithoutCreatedByInput = {
  create: BoardCreateWithoutCreatedByInput;
  where: BoardWhereUniqueInput;
};

export type BoardCreateOrConnectWithoutFollowersInput = {
  create: BoardCreateWithoutFollowersInput;
  where: BoardWhereUniqueInput;
};

export type BoardCreateOrConnectWithoutPostsInput = {
  create: BoardCreateWithoutPostsInput;
  where: BoardWhereUniqueInput;
};

export type BoardCreateOrConnectWithoutSchedulesInput = {
  create: BoardCreateWithoutSchedulesInput;
  where: BoardWhereUniqueInput;
};

export type BoardCreateWithoutCategoriesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  followers?: InputMaybe<BoardFollowerCreateNestedManyWithoutBoardInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  posts?: InputMaybe<PostCreateNestedManyWithoutBoardInput>;
  schedules?: InputMaybe<ScheduleItemCreateNestedManyWithoutBoardInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BoardCreateWithoutCreatedByInput = {
  categories?: InputMaybe<BoardCategoryCreateNestedManyWithoutBoardInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  followers?: InputMaybe<BoardFollowerCreateNestedManyWithoutBoardInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  posts?: InputMaybe<PostCreateNestedManyWithoutBoardInput>;
  schedules?: InputMaybe<ScheduleItemCreateNestedManyWithoutBoardInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BoardCreateWithoutFollowersInput = {
  categories?: InputMaybe<BoardCategoryCreateNestedManyWithoutBoardInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  posts?: InputMaybe<PostCreateNestedManyWithoutBoardInput>;
  schedules?: InputMaybe<ScheduleItemCreateNestedManyWithoutBoardInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BoardCreateWithoutPostsInput = {
  categories?: InputMaybe<BoardCategoryCreateNestedManyWithoutBoardInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  followers?: InputMaybe<BoardFollowerCreateNestedManyWithoutBoardInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  schedules?: InputMaybe<ScheduleItemCreateNestedManyWithoutBoardInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BoardCreateWithoutSchedulesInput = {
  categories?: InputMaybe<BoardCategoryCreateNestedManyWithoutBoardInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  followers?: InputMaybe<BoardFollowerCreateNestedManyWithoutBoardInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  posts?: InputMaybe<PostCreateNestedManyWithoutBoardInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BoardEventPayload = {
  __typename?: 'BoardEventPayload';
  board: Board;
  type: Scalars['String']['output'];
};

export type BoardFollower = {
  __typename?: 'BoardFollower';
  board: Board;
  boardId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type BoardFollowerBoardIdUserIdCompoundUniqueInput = {
  boardId: Scalars['String']['input'];
};

export type BoardFollowerCountAggregate = {
  __typename?: 'BoardFollowerCountAggregate';
  _all: Scalars['Int']['output'];
  boardId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type BoardFollowerCreateManyBoardInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BoardFollowerCreateManyBoardInputEnvelope = {
  data: Array<BoardFollowerCreateManyBoardInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoardFollowerCreateManyUserInput = {
  boardId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BoardFollowerCreateManyUserInputEnvelope = {
  data: Array<BoardFollowerCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoardFollowerCreateNestedManyWithoutBoardInput = {
  connect?: InputMaybe<Array<BoardFollowerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BoardFollowerCreateOrConnectWithoutBoardInput>>;
  create?: InputMaybe<Array<BoardFollowerCreateWithoutBoardInput>>;
  createMany?: InputMaybe<BoardFollowerCreateManyBoardInputEnvelope>;
};

export type BoardFollowerCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<BoardFollowerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BoardFollowerCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<BoardFollowerCreateWithoutUserInput>>;
  createMany?: InputMaybe<BoardFollowerCreateManyUserInputEnvelope>;
};

export type BoardFollowerCreateOrConnectWithoutBoardInput = {
  create: BoardFollowerCreateWithoutBoardInput;
  where: BoardFollowerWhereUniqueInput;
};

export type BoardFollowerCreateOrConnectWithoutUserInput = {
  create: BoardFollowerCreateWithoutUserInput;
  where: BoardFollowerWhereUniqueInput;
};

export type BoardFollowerCreateWithoutBoardInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BoardFollowerCreateWithoutUserInput = {
  board: BoardCreateNestedOneWithoutFollowersInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BoardFollowerEventPayload = {
  __typename?: 'BoardFollowerEventPayload';
  boardFollower: BoardFollower;
  type: Scalars['String']['output'];
};

export type BoardFollowerListRelationFilter = {
  every?: InputMaybe<BoardFollowerWhereInput>;
  none?: InputMaybe<BoardFollowerWhereInput>;
  some?: InputMaybe<BoardFollowerWhereInput>;
};

export type BoardFollowerMaxAggregate = {
  __typename?: 'BoardFollowerMaxAggregate';
  boardId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type BoardFollowerMinAggregate = {
  __typename?: 'BoardFollowerMinAggregate';
  boardId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type BoardFollowerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BoardFollowerOrderByWithRelationInput = {
  board?: InputMaybe<BoardOrderByWithRelationInput>;
  boardId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export enum BoardFollowerScalarFieldEnum {
  BoardId = 'boardId',
  CreatedAt = 'createdAt',
  Id = 'id',
  UserId = 'userId'
}

export type BoardFollowerScalarWhereInput = {
  AND?: InputMaybe<Array<BoardFollowerScalarWhereInput>>;
  NOT?: InputMaybe<Array<BoardFollowerScalarWhereInput>>;
  OR?: InputMaybe<Array<BoardFollowerScalarWhereInput>>;
  boardId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
};

export type BoardFollowerUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BoardFollowerUpdateManyWithWhereWithoutBoardInput = {
  data: BoardFollowerUpdateManyMutationInput;
  where: BoardFollowerScalarWhereInput;
};

export type BoardFollowerUpdateManyWithWhereWithoutUserInput = {
  data: BoardFollowerUpdateManyMutationInput;
  where: BoardFollowerScalarWhereInput;
};

export type BoardFollowerUpdateManyWithoutBoardNestedInput = {
  connect?: InputMaybe<Array<BoardFollowerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BoardFollowerCreateOrConnectWithoutBoardInput>>;
  create?: InputMaybe<Array<BoardFollowerCreateWithoutBoardInput>>;
  createMany?: InputMaybe<BoardFollowerCreateManyBoardInputEnvelope>;
  delete?: InputMaybe<Array<BoardFollowerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BoardFollowerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BoardFollowerWhereUniqueInput>>;
  set?: InputMaybe<Array<BoardFollowerWhereUniqueInput>>;
  update?: InputMaybe<Array<BoardFollowerUpdateWithWhereUniqueWithoutBoardInput>>;
  updateMany?: InputMaybe<Array<BoardFollowerUpdateManyWithWhereWithoutBoardInput>>;
  upsert?: InputMaybe<Array<BoardFollowerUpsertWithWhereUniqueWithoutBoardInput>>;
};

export type BoardFollowerUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<BoardFollowerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BoardFollowerCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<BoardFollowerCreateWithoutUserInput>>;
  createMany?: InputMaybe<BoardFollowerCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<BoardFollowerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BoardFollowerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BoardFollowerWhereUniqueInput>>;
  set?: InputMaybe<Array<BoardFollowerWhereUniqueInput>>;
  update?: InputMaybe<Array<BoardFollowerUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<BoardFollowerUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<BoardFollowerUpsertWithWhereUniqueWithoutUserInput>>;
};

export type BoardFollowerUpdateWithWhereUniqueWithoutBoardInput = {
  data: BoardFollowerUpdateWithoutBoardInput;
  where: BoardFollowerWhereUniqueInput;
};

export type BoardFollowerUpdateWithWhereUniqueWithoutUserInput = {
  data: BoardFollowerUpdateWithoutUserInput;
  where: BoardFollowerWhereUniqueInput;
};

export type BoardFollowerUpdateWithoutBoardInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BoardFollowerUpdateWithoutUserInput = {
  board?: InputMaybe<BoardUpdateOneRequiredWithoutFollowersNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BoardFollowerUpsertWithWhereUniqueWithoutBoardInput = {
  create: BoardFollowerCreateWithoutBoardInput;
  update: BoardFollowerUpdateWithoutBoardInput;
  where: BoardFollowerWhereUniqueInput;
};

export type BoardFollowerUpsertWithWhereUniqueWithoutUserInput = {
  create: BoardFollowerCreateWithoutUserInput;
  update: BoardFollowerUpdateWithoutUserInput;
  where: BoardFollowerWhereUniqueInput;
};

export type BoardFollowerWhereInput = {
  AND?: InputMaybe<Array<BoardFollowerWhereInput>>;
  NOT?: InputMaybe<Array<BoardFollowerWhereInput>>;
  OR?: InputMaybe<Array<BoardFollowerWhereInput>>;
  board?: InputMaybe<BoardScalarRelationFilter>;
  boardId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
};

export type BoardFollowerWhereUniqueInput = {
  AND?: InputMaybe<Array<BoardFollowerWhereInput>>;
  NOT?: InputMaybe<Array<BoardFollowerWhereInput>>;
  OR?: InputMaybe<Array<BoardFollowerWhereInput>>;
  board?: InputMaybe<BoardScalarRelationFilter>;
  boardId?: InputMaybe<StringFilter>;
  boardId_userId?: InputMaybe<BoardFollowerBoardIdUserIdCompoundUniqueInput>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BoardListRelationFilter = {
  every?: InputMaybe<BoardWhereInput>;
  none?: InputMaybe<BoardWhereInput>;
  some?: InputMaybe<BoardWhereInput>;
};

export type BoardMaxAggregate = {
  __typename?: 'BoardMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type BoardMinAggregate = {
  __typename?: 'BoardMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type BoardNameUserIdCompoundUniqueInput = {
  name: Scalars['String']['input'];
};

export type BoardNullableScalarRelationFilter = {
  is?: InputMaybe<BoardWhereInput>;
  isNot?: InputMaybe<BoardWhereInput>;
};

export type BoardOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BoardOrderByWithRelationInput = {
  categories?: InputMaybe<BoardCategoryOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  followers?: InputMaybe<BoardFollowerOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  posts?: InputMaybe<PostOrderByRelationAggregateInput>;
  schedules?: InputMaybe<ScheduleItemOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum BoardScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type BoardScalarRelationFilter = {
  is?: InputMaybe<BoardWhereInput>;
  isNot?: InputMaybe<BoardWhereInput>;
};

export type BoardScalarWhereInput = {
  AND?: InputMaybe<Array<BoardScalarWhereInput>>;
  NOT?: InputMaybe<Array<BoardScalarWhereInput>>;
  OR?: InputMaybe<Array<BoardScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BoardUpdateInput = {
  categories?: InputMaybe<BoardCategoryUpdateManyWithoutBoardNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  followers?: InputMaybe<BoardFollowerUpdateManyWithoutBoardNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutBoardNestedInput>;
  schedules?: InputMaybe<ScheduleItemUpdateManyWithoutBoardNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BoardUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BoardUpdateManyWithWhereWithoutCreatedByInput = {
  data: BoardUpdateManyMutationInput;
  where: BoardScalarWhereInput;
};

export type BoardUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<BoardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BoardCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<BoardCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<BoardCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<BoardWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BoardScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BoardWhereUniqueInput>>;
  set?: InputMaybe<Array<BoardWhereUniqueInput>>;
  update?: InputMaybe<Array<BoardUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<BoardUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<BoardUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type BoardUpdateOneRequiredWithoutCategoriesNestedInput = {
  connect?: InputMaybe<BoardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BoardCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<BoardCreateWithoutCategoriesInput>;
  update?: InputMaybe<BoardUpdateToOneWithWhereWithoutCategoriesInput>;
  upsert?: InputMaybe<BoardUpsertWithoutCategoriesInput>;
};

export type BoardUpdateOneRequiredWithoutFollowersNestedInput = {
  connect?: InputMaybe<BoardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BoardCreateOrConnectWithoutFollowersInput>;
  create?: InputMaybe<BoardCreateWithoutFollowersInput>;
  update?: InputMaybe<BoardUpdateToOneWithWhereWithoutFollowersInput>;
  upsert?: InputMaybe<BoardUpsertWithoutFollowersInput>;
};

export type BoardUpdateOneWithoutPostsNestedInput = {
  connect?: InputMaybe<BoardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BoardCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<BoardCreateWithoutPostsInput>;
  delete?: InputMaybe<BoardWhereInput>;
  disconnect?: InputMaybe<BoardWhereInput>;
  update?: InputMaybe<BoardUpdateToOneWithWhereWithoutPostsInput>;
  upsert?: InputMaybe<BoardUpsertWithoutPostsInput>;
};

export type BoardUpdateOneWithoutSchedulesNestedInput = {
  connect?: InputMaybe<BoardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BoardCreateOrConnectWithoutSchedulesInput>;
  create?: InputMaybe<BoardCreateWithoutSchedulesInput>;
  delete?: InputMaybe<BoardWhereInput>;
  disconnect?: InputMaybe<BoardWhereInput>;
  update?: InputMaybe<BoardUpdateToOneWithWhereWithoutSchedulesInput>;
  upsert?: InputMaybe<BoardUpsertWithoutSchedulesInput>;
};

export type BoardUpdateToOneWithWhereWithoutCategoriesInput = {
  data: BoardUpdateWithoutCategoriesInput;
  where?: InputMaybe<BoardWhereInput>;
};

export type BoardUpdateToOneWithWhereWithoutFollowersInput = {
  data: BoardUpdateWithoutFollowersInput;
  where?: InputMaybe<BoardWhereInput>;
};

export type BoardUpdateToOneWithWhereWithoutPostsInput = {
  data: BoardUpdateWithoutPostsInput;
  where?: InputMaybe<BoardWhereInput>;
};

export type BoardUpdateToOneWithWhereWithoutSchedulesInput = {
  data: BoardUpdateWithoutSchedulesInput;
  where?: InputMaybe<BoardWhereInput>;
};

export type BoardUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: BoardUpdateWithoutCreatedByInput;
  where: BoardWhereUniqueInput;
};

export type BoardUpdateWithoutCategoriesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  followers?: InputMaybe<BoardFollowerUpdateManyWithoutBoardNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutBoardNestedInput>;
  schedules?: InputMaybe<ScheduleItemUpdateManyWithoutBoardNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BoardUpdateWithoutCreatedByInput = {
  categories?: InputMaybe<BoardCategoryUpdateManyWithoutBoardNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  followers?: InputMaybe<BoardFollowerUpdateManyWithoutBoardNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutBoardNestedInput>;
  schedules?: InputMaybe<ScheduleItemUpdateManyWithoutBoardNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BoardUpdateWithoutFollowersInput = {
  categories?: InputMaybe<BoardCategoryUpdateManyWithoutBoardNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutBoardNestedInput>;
  schedules?: InputMaybe<ScheduleItemUpdateManyWithoutBoardNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BoardUpdateWithoutPostsInput = {
  categories?: InputMaybe<BoardCategoryUpdateManyWithoutBoardNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  followers?: InputMaybe<BoardFollowerUpdateManyWithoutBoardNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  schedules?: InputMaybe<ScheduleItemUpdateManyWithoutBoardNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BoardUpdateWithoutSchedulesInput = {
  categories?: InputMaybe<BoardCategoryUpdateManyWithoutBoardNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  followers?: InputMaybe<BoardFollowerUpdateManyWithoutBoardNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutBoardNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BoardUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: BoardCreateWithoutCreatedByInput;
  update: BoardUpdateWithoutCreatedByInput;
  where: BoardWhereUniqueInput;
};

export type BoardUpsertWithoutCategoriesInput = {
  create: BoardCreateWithoutCategoriesInput;
  update: BoardUpdateWithoutCategoriesInput;
  where?: InputMaybe<BoardWhereInput>;
};

export type BoardUpsertWithoutFollowersInput = {
  create: BoardCreateWithoutFollowersInput;
  update: BoardUpdateWithoutFollowersInput;
  where?: InputMaybe<BoardWhereInput>;
};

export type BoardUpsertWithoutPostsInput = {
  create: BoardCreateWithoutPostsInput;
  update: BoardUpdateWithoutPostsInput;
  where?: InputMaybe<BoardWhereInput>;
};

export type BoardUpsertWithoutSchedulesInput = {
  create: BoardCreateWithoutSchedulesInput;
  update: BoardUpdateWithoutSchedulesInput;
  where?: InputMaybe<BoardWhereInput>;
};

export type BoardWhereInput = {
  AND?: InputMaybe<Array<BoardWhereInput>>;
  NOT?: InputMaybe<Array<BoardWhereInput>>;
  OR?: InputMaybe<Array<BoardWhereInput>>;
  categories?: InputMaybe<BoardCategoryListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  followers?: InputMaybe<BoardFollowerListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
  schedules?: InputMaybe<ScheduleItemListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BoardWhereUniqueInput = {
  AND?: InputMaybe<Array<BoardWhereInput>>;
  NOT?: InputMaybe<Array<BoardWhereInput>>;
  OR?: InputMaybe<Array<BoardWhereInput>>;
  categories?: InputMaybe<BoardCategoryListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  followers?: InputMaybe<BoardFollowerListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  name_userId?: InputMaybe<BoardNameUserIdCompoundUniqueInput>;
  posts?: InputMaybe<PostListRelationFilter>;
  schedules?: InputMaybe<ScheduleItemListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Category = {
  __typename?: 'Category';
  _count: CategoryCount;
  boards?: Maybe<Array<BoardCategory>>;
  /** Child categories */
  children?: Maybe<Array<Category>>;
  createdAt: Scalars['DateTime']['output'];
  /** Optional category description */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** @Example "Health" */
  name: Scalars['String']['output'];
  parent?: Maybe<Category>;
  /** Parent category (self-relation) */
  parentId?: Maybe<Scalars['String']['output']>;
  schedules?: Maybe<Array<ScheduleItem>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  boards: Scalars['Int']['output'];
  children: Scalars['Int']['output'];
  schedules: Scalars['Int']['output'];
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  parentId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type CategoryCreateInput = {
  boards?: InputMaybe<BoardCategoryCreateNestedManyWithoutCategoryInput>;
  children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
  schedules?: InputMaybe<ScheduleItemCreateNestedManyWithoutCategoryInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryCreateManyParentInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryCreateManyParentInputEnvelope = {
  data: Array<CategoryCreateManyParentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryCreateNestedManyWithoutParentInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutParentInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutParentInput>>;
  createMany?: InputMaybe<CategoryCreateManyParentInputEnvelope>;
};

export type CategoryCreateNestedOneWithoutBoardsInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutBoardsInput>;
  create?: InputMaybe<CategoryCreateWithoutBoardsInput>;
};

export type CategoryCreateNestedOneWithoutChildrenInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutChildrenInput>;
  create?: InputMaybe<CategoryCreateWithoutChildrenInput>;
};

export type CategoryCreateNestedOneWithoutSchedulesInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutSchedulesInput>;
  create?: InputMaybe<CategoryCreateWithoutSchedulesInput>;
};

export type CategoryCreateOrConnectWithoutBoardsInput = {
  create: CategoryCreateWithoutBoardsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutChildrenInput = {
  create: CategoryCreateWithoutChildrenInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutParentInput = {
  create: CategoryCreateWithoutParentInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutSchedulesInput = {
  create: CategoryCreateWithoutSchedulesInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutBoardsInput = {
  children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
  schedules?: InputMaybe<ScheduleItemCreateNestedManyWithoutCategoryInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryCreateWithoutChildrenInput = {
  boards?: InputMaybe<BoardCategoryCreateNestedManyWithoutCategoryInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
  schedules?: InputMaybe<ScheduleItemCreateNestedManyWithoutCategoryInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryCreateWithoutParentInput = {
  boards?: InputMaybe<BoardCategoryCreateNestedManyWithoutCategoryInput>;
  children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  schedules?: InputMaybe<ScheduleItemCreateNestedManyWithoutCategoryInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryCreateWithoutSchedulesInput = {
  boards?: InputMaybe<BoardCategoryCreateNestedManyWithoutCategoryInput>;
  children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryEventPayload = {
  __typename?: 'CategoryEventPayload';
  category: Category;
  type: Scalars['String']['output'];
};

export type CategoryListRelationFilter = {
  every?: InputMaybe<CategoryWhereInput>;
  none?: InputMaybe<CategoryWhereInput>;
  some?: InputMaybe<CategoryWhereInput>;
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryNameParentIdCompoundUniqueInput = {
  name: Scalars['String']['input'];
  parentId: Scalars['String']['input'];
};

export type CategoryNullableScalarRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export type CategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithRelationInput = {
  boards?: InputMaybe<BoardCategoryOrderByRelationAggregateInput>;
  children?: InputMaybe<CategoryOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parent?: InputMaybe<CategoryOrderByWithRelationInput>;
  parentId?: InputMaybe<SortOrderInput>;
  schedules?: InputMaybe<ScheduleItemOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum CategoryScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  ParentId = 'parentId',
  UpdatedAt = 'updatedAt'
}

export type CategoryScalarRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export type CategoryScalarWhereInput = {
  AND?: InputMaybe<Array<CategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<CategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<CategoryScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  parentId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryUpdateInput = {
  boards?: InputMaybe<BoardCategoryUpdateManyWithoutCategoryNestedInput>;
  children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
  schedules?: InputMaybe<ScheduleItemUpdateManyWithoutCategoryNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyWithWhereWithoutParentInput = {
  data: CategoryUpdateManyMutationInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithoutParentNestedInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutParentInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutParentInput>>;
  createMany?: InputMaybe<CategoryCreateManyParentInputEnvelope>;
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryUpdateWithWhereUniqueWithoutParentInput>>;
  updateMany?: InputMaybe<Array<CategoryUpdateManyWithWhereWithoutParentInput>>;
  upsert?: InputMaybe<Array<CategoryUpsertWithWhereUniqueWithoutParentInput>>;
};

export type CategoryUpdateOneRequiredWithoutBoardsNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutBoardsInput>;
  create?: InputMaybe<CategoryCreateWithoutBoardsInput>;
  update?: InputMaybe<CategoryUpdateToOneWithWhereWithoutBoardsInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutBoardsInput>;
};

export type CategoryUpdateOneWithoutChildrenNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutChildrenInput>;
  create?: InputMaybe<CategoryCreateWithoutChildrenInput>;
  delete?: InputMaybe<CategoryWhereInput>;
  disconnect?: InputMaybe<CategoryWhereInput>;
  update?: InputMaybe<CategoryUpdateToOneWithWhereWithoutChildrenInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutChildrenInput>;
};

export type CategoryUpdateOneWithoutSchedulesNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutSchedulesInput>;
  create?: InputMaybe<CategoryCreateWithoutSchedulesInput>;
  delete?: InputMaybe<CategoryWhereInput>;
  disconnect?: InputMaybe<CategoryWhereInput>;
  update?: InputMaybe<CategoryUpdateToOneWithWhereWithoutSchedulesInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutSchedulesInput>;
};

export type CategoryUpdateToOneWithWhereWithoutBoardsInput = {
  data: CategoryUpdateWithoutBoardsInput;
  where?: InputMaybe<CategoryWhereInput>;
};

export type CategoryUpdateToOneWithWhereWithoutChildrenInput = {
  data: CategoryUpdateWithoutChildrenInput;
  where?: InputMaybe<CategoryWhereInput>;
};

export type CategoryUpdateToOneWithWhereWithoutSchedulesInput = {
  data: CategoryUpdateWithoutSchedulesInput;
  where?: InputMaybe<CategoryWhereInput>;
};

export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
  data: CategoryUpdateWithoutParentInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithoutBoardsInput = {
  children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
  schedules?: InputMaybe<ScheduleItemUpdateManyWithoutCategoryNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutChildrenInput = {
  boards?: InputMaybe<BoardCategoryUpdateManyWithoutCategoryNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
  schedules?: InputMaybe<ScheduleItemUpdateManyWithoutCategoryNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutParentInput = {
  boards?: InputMaybe<BoardCategoryUpdateManyWithoutCategoryNestedInput>;
  children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  schedules?: InputMaybe<ScheduleItemUpdateManyWithoutCategoryNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutSchedulesInput = {
  boards?: InputMaybe<BoardCategoryUpdateManyWithoutCategoryNestedInput>;
  children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
  create: CategoryCreateWithoutParentInput;
  update: CategoryUpdateWithoutParentInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithoutBoardsInput = {
  create: CategoryCreateWithoutBoardsInput;
  update: CategoryUpdateWithoutBoardsInput;
  where?: InputMaybe<CategoryWhereInput>;
};

export type CategoryUpsertWithoutChildrenInput = {
  create: CategoryCreateWithoutChildrenInput;
  update: CategoryUpdateWithoutChildrenInput;
  where?: InputMaybe<CategoryWhereInput>;
};

export type CategoryUpsertWithoutSchedulesInput = {
  create: CategoryCreateWithoutSchedulesInput;
  update: CategoryUpdateWithoutSchedulesInput;
  where?: InputMaybe<CategoryWhereInput>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  boards?: InputMaybe<BoardCategoryListRelationFilter>;
  children?: InputMaybe<CategoryListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  parent?: InputMaybe<CategoryNullableScalarRelationFilter>;
  parentId?: InputMaybe<StringNullableFilter>;
  schedules?: InputMaybe<ScheduleItemListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  boards?: InputMaybe<BoardCategoryListRelationFilter>;
  children?: InputMaybe<CategoryListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  name_parentId?: InputMaybe<CategoryNameParentIdCompoundUniqueInput>;
  parent?: InputMaybe<CategoryNullableScalarRelationFilter>;
  parentId?: InputMaybe<StringNullableFilter>;
  schedules?: InputMaybe<ScheduleItemListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumResourceTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ResourceType>;
};

export type EnumResourceTypeFilter = {
  equals?: InputMaybe<ResourceType>;
  in?: InputMaybe<Array<ResourceType>>;
  not?: InputMaybe<NestedEnumResourceTypeFilter>;
  notIn?: InputMaybe<Array<ResourceType>>;
};

export type EnumRoleNullableListFilter = {
  equals?: InputMaybe<Array<Role>>;
  has?: InputMaybe<Role>;
  hasEvery?: InputMaybe<Array<Role>>;
  hasSome?: InputMaybe<Array<Role>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Media = {
  __typename?: 'Media';
  bytes: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  duration?: Maybe<Scalars['Float']['output']>;
  eager?: Maybe<Scalars['JSON']['output']>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  playbackUrl?: Maybe<Scalars['String']['output']>;
  post?: Maybe<Post>;
  postId?: Maybe<Scalars['String']['output']>;
  /** Cloudinary public ID or external provider key */
  publicId: Scalars['String']['output'];
  resourceType: ResourceType;
  secureUrl: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type MediaAvgAggregate = {
  __typename?: 'MediaAvgAggregate';
  bytes?: Maybe<Scalars['Float']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type MediaCountAggregate = {
  __typename?: 'MediaCountAggregate';
  _all: Scalars['Int']['output'];
  bytes: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  duration: Scalars['Int']['output'];
  eager: Scalars['Int']['output'];
  format: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  playbackUrl: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
  publicId: Scalars['Int']['output'];
  resourceType: Scalars['Int']['output'];
  secureUrl: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

export type MediaCreateManyPostInput = {
  bytes: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Float']['input']>;
  eager?: InputMaybe<Scalars['JSON']['input']>;
  format: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  playbackUrl?: InputMaybe<Scalars['String']['input']>;
  publicId: Scalars['String']['input'];
  resourceType: ResourceType;
  secureUrl: Scalars['String']['input'];
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type MediaCreateManyPostInputEnvelope = {
  data: Array<MediaCreateManyPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MediaCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<MediaWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MediaCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<MediaCreateWithoutPostInput>>;
  createMany?: InputMaybe<MediaCreateManyPostInputEnvelope>;
};

export type MediaCreateOrConnectWithoutPostInput = {
  create: MediaCreateWithoutPostInput;
  where: MediaWhereUniqueInput;
};

export type MediaCreateWithoutPostInput = {
  bytes: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  duration?: InputMaybe<Scalars['Float']['input']>;
  eager?: InputMaybe<Scalars['JSON']['input']>;
  format: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  playbackUrl?: InputMaybe<Scalars['String']['input']>;
  publicId: Scalars['String']['input'];
  resourceType: ResourceType;
  secureUrl: Scalars['String']['input'];
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type MediaListRelationFilter = {
  every?: InputMaybe<MediaWhereInput>;
  none?: InputMaybe<MediaWhereInput>;
  some?: InputMaybe<MediaWhereInput>;
};

export type MediaMaxAggregate = {
  __typename?: 'MediaMaxAggregate';
  bytes?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  playbackUrl?: Maybe<Scalars['String']['output']>;
  postId?: Maybe<Scalars['String']['output']>;
  publicId?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<ResourceType>;
  secureUrl?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type MediaMinAggregate = {
  __typename?: 'MediaMinAggregate';
  bytes?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  playbackUrl?: Maybe<Scalars['String']['output']>;
  postId?: Maybe<Scalars['String']['output']>;
  publicId?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<ResourceType>;
  secureUrl?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type MediaOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MediaScalarWhereInput = {
  AND?: InputMaybe<Array<MediaScalarWhereInput>>;
  NOT?: InputMaybe<Array<MediaScalarWhereInput>>;
  OR?: InputMaybe<Array<MediaScalarWhereInput>>;
  bytes?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  duration?: InputMaybe<FloatNullableFilter>;
  eager?: InputMaybe<JsonNullableFilter>;
  format?: InputMaybe<StringFilter>;
  height?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  playbackUrl?: InputMaybe<StringNullableFilter>;
  postId?: InputMaybe<StringNullableFilter>;
  publicId?: InputMaybe<StringFilter>;
  resourceType?: InputMaybe<EnumResourceTypeFilter>;
  secureUrl?: InputMaybe<StringFilter>;
  width?: InputMaybe<IntNullableFilter>;
};

export type MediaSumAggregate = {
  __typename?: 'MediaSumAggregate';
  bytes?: Maybe<Scalars['Int']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type MediaUpdateManyMutationInput = {
  bytes?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  duration?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  eager?: InputMaybe<Scalars['JSON']['input']>;
  format?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  playbackUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publicId?: InputMaybe<StringFieldUpdateOperationsInput>;
  resourceType?: InputMaybe<EnumResourceTypeFieldUpdateOperationsInput>;
  secureUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  width?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type MediaUpdateManyWithWhereWithoutPostInput = {
  data: MediaUpdateManyMutationInput;
  where: MediaScalarWhereInput;
};

export type MediaUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<MediaWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MediaCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<MediaCreateWithoutPostInput>>;
  createMany?: InputMaybe<MediaCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<MediaWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MediaScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MediaWhereUniqueInput>>;
  set?: InputMaybe<Array<MediaWhereUniqueInput>>;
  update?: InputMaybe<Array<MediaUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<MediaUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<MediaUpsertWithWhereUniqueWithoutPostInput>>;
};

export type MediaUpdateWithWhereUniqueWithoutPostInput = {
  data: MediaUpdateWithoutPostInput;
  where: MediaWhereUniqueInput;
};

export type MediaUpdateWithoutPostInput = {
  bytes?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  duration?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  eager?: InputMaybe<Scalars['JSON']['input']>;
  format?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  playbackUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  publicId?: InputMaybe<StringFieldUpdateOperationsInput>;
  resourceType?: InputMaybe<EnumResourceTypeFieldUpdateOperationsInput>;
  secureUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  width?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type MediaUpsertWithWhereUniqueWithoutPostInput = {
  create: MediaCreateWithoutPostInput;
  update: MediaUpdateWithoutPostInput;
  where: MediaWhereUniqueInput;
};

export type MediaWhereInput = {
  AND?: InputMaybe<Array<MediaWhereInput>>;
  NOT?: InputMaybe<Array<MediaWhereInput>>;
  OR?: InputMaybe<Array<MediaWhereInput>>;
  bytes?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  duration?: InputMaybe<FloatNullableFilter>;
  eager?: InputMaybe<JsonNullableFilter>;
  format?: InputMaybe<StringFilter>;
  height?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  playbackUrl?: InputMaybe<StringNullableFilter>;
  post?: InputMaybe<PostNullableScalarRelationFilter>;
  postId?: InputMaybe<StringNullableFilter>;
  publicId?: InputMaybe<StringFilter>;
  resourceType?: InputMaybe<EnumResourceTypeFilter>;
  secureUrl?: InputMaybe<StringFilter>;
  width?: InputMaybe<IntNullableFilter>;
};

export type MediaWhereUniqueInput = {
  AND?: InputMaybe<Array<MediaWhereInput>>;
  NOT?: InputMaybe<Array<MediaWhereInput>>;
  OR?: InputMaybe<Array<MediaWhereInput>>;
  bytes?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  duration?: InputMaybe<FloatNullableFilter>;
  eager?: InputMaybe<JsonNullableFilter>;
  format?: InputMaybe<StringFilter>;
  height?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  playbackUrl?: InputMaybe<StringNullableFilter>;
  post?: InputMaybe<PostNullableScalarRelationFilter>;
  postId?: InputMaybe<StringNullableFilter>;
  publicId?: InputMaybe<Scalars['String']['input']>;
  resourceType?: InputMaybe<EnumResourceTypeFilter>;
  secureUrl?: InputMaybe<StringFilter>;
  width?: InputMaybe<IntNullableFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBoard: Board;
  createCategory: Category;
  createPost: Post;
  createSchedule: ScheduleItem;
  createUser: User;
  followUser: UserFollow;
  login: AuthPayload;
  logout: Scalars['Boolean']['output'];
  refresh: AuthPayload;
  removeBoard: Board;
  removeCategory: Category;
  removePost: Post;
  removeSchedule: ScheduleItem;
  removeUser: User;
  subscribeBoard: BoardFollower;
  unfollowUser: UserFollow;
  unsubscribeBoard: BoardFollower;
  updateBoard: Board;
  updateCategory: Category;
  updatePost: Post;
  updateSchedule: ScheduleItem;
  updateUser: User;
  verifyEmail: Scalars['Boolean']['output'];
};


export type MutationCreateBoardArgs = {
  data: BoardCreateInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateScheduleArgs = {
  data: ScheduleItemCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationFollowUserArgs = {
  followingId: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationLogoutArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRefreshArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRemoveBoardArgs = {
  where: BoardWhereUniqueInput;
};


export type MutationRemoveCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationRemovePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationRemoveScheduleArgs = {
  where: ScheduleItemWhereUniqueInput;
};


export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationSubscribeBoardArgs = {
  boardId: Scalars['String']['input'];
};


export type MutationUnfollowUserArgs = {
  followingId: Scalars['String']['input'];
};


export type MutationUnsubscribeBoardArgs = {
  boardId: Scalars['String']['input'];
};


export type MutationUpdateBoardArgs = {
  data: BoardUpdateInput;
  where: BoardWhereUniqueInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdateScheduleArgs = {
  data: ScheduleItemUpdateInput;
  where: ScheduleItemWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String']['input'];
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumResourceTypeFilter = {
  equals?: InputMaybe<ResourceType>;
  in?: InputMaybe<Array<ResourceType>>;
  not?: InputMaybe<NestedEnumResourceTypeFilter>;
  notIn?: InputMaybe<Array<ResourceType>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Post = {
  __typename?: 'Post';
  _count: PostCount;
  author: User;
  board?: Maybe<Board>;
  boardId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** Related media assets */
  media?: Maybe<Array<Media>>;
  parent?: Maybe<Post>;
  parentId?: Maybe<Scalars['String']['output']>;
  replies?: Maybe<Array<Post>>;
  schedule?: Maybe<ScheduleItem>;
  scheduleId?: Maybe<Scalars['String']['output']>;
  textContent?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type PostCount = {
  __typename?: 'PostCount';
  media: Scalars['Int']['output'];
  replies: Scalars['Int']['output'];
};

export type PostCountAggregate = {
  __typename?: 'PostCountAggregate';
  _all: Scalars['Int']['output'];
  boardId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  parentId: Scalars['Int']['output'];
  scheduleId: Scalars['Int']['output'];
  textContent: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type PostCreateInput = {
  board?: InputMaybe<BoardCreateNestedOneWithoutPostsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaCreateNestedManyWithoutPostInput>;
  parent?: InputMaybe<PostCreateNestedOneWithoutRepliesInput>;
  replies?: InputMaybe<PostCreateNestedManyWithoutParentInput>;
  schedule?: InputMaybe<ScheduleItemCreateNestedOneWithoutPostInput>;
  textContent?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostCreateManyAuthorInput = {
  boardId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  scheduleId?: InputMaybe<Scalars['String']['input']>;
  textContent?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostCreateManyAuthorInputEnvelope = {
  data: Array<PostCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostCreateManyBoardInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  scheduleId?: InputMaybe<Scalars['String']['input']>;
  textContent?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostCreateManyBoardInputEnvelope = {
  data: Array<PostCreateManyBoardInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostCreateManyParentInput = {
  boardId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  scheduleId?: InputMaybe<Scalars['String']['input']>;
  textContent?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostCreateManyParentInputEnvelope = {
  data: Array<PostCreateManyParentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostCreateManyScheduleInput = {
  boardId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  textContent?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostCreateManyScheduleInputEnvelope = {
  data: Array<PostCreateManyScheduleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>;
};

export type PostCreateNestedManyWithoutBoardInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutBoardInput>>;
  create?: InputMaybe<Array<PostCreateWithoutBoardInput>>;
  createMany?: InputMaybe<PostCreateManyBoardInputEnvelope>;
};

export type PostCreateNestedManyWithoutParentInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutParentInput>>;
  create?: InputMaybe<Array<PostCreateWithoutParentInput>>;
  createMany?: InputMaybe<PostCreateManyParentInputEnvelope>;
};

export type PostCreateNestedManyWithoutScheduleInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutScheduleInput>>;
  create?: InputMaybe<Array<PostCreateWithoutScheduleInput>>;
  createMany?: InputMaybe<PostCreateManyScheduleInputEnvelope>;
};

export type PostCreateNestedOneWithoutRepliesInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutRepliesInput>;
  create?: InputMaybe<PostCreateWithoutRepliesInput>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutBoardInput = {
  create: PostCreateWithoutBoardInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutParentInput = {
  create: PostCreateWithoutParentInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutRepliesInput = {
  create: PostCreateWithoutRepliesInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutScheduleInput = {
  create: PostCreateWithoutScheduleInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutAuthorInput = {
  board?: InputMaybe<BoardCreateNestedOneWithoutPostsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaCreateNestedManyWithoutPostInput>;
  parent?: InputMaybe<PostCreateNestedOneWithoutRepliesInput>;
  replies?: InputMaybe<PostCreateNestedManyWithoutParentInput>;
  schedule?: InputMaybe<ScheduleItemCreateNestedOneWithoutPostInput>;
  textContent?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostCreateWithoutBoardInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaCreateNestedManyWithoutPostInput>;
  parent?: InputMaybe<PostCreateNestedOneWithoutRepliesInput>;
  replies?: InputMaybe<PostCreateNestedManyWithoutParentInput>;
  schedule?: InputMaybe<ScheduleItemCreateNestedOneWithoutPostInput>;
  textContent?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostCreateWithoutParentInput = {
  board?: InputMaybe<BoardCreateNestedOneWithoutPostsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaCreateNestedManyWithoutPostInput>;
  replies?: InputMaybe<PostCreateNestedManyWithoutParentInput>;
  schedule?: InputMaybe<ScheduleItemCreateNestedOneWithoutPostInput>;
  textContent?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostCreateWithoutRepliesInput = {
  board?: InputMaybe<BoardCreateNestedOneWithoutPostsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaCreateNestedManyWithoutPostInput>;
  parent?: InputMaybe<PostCreateNestedOneWithoutRepliesInput>;
  schedule?: InputMaybe<ScheduleItemCreateNestedOneWithoutPostInput>;
  textContent?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostCreateWithoutScheduleInput = {
  board?: InputMaybe<BoardCreateNestedOneWithoutPostsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaCreateNestedManyWithoutPostInput>;
  parent?: InputMaybe<PostCreateNestedOneWithoutRepliesInput>;
  replies?: InputMaybe<PostCreateNestedManyWithoutParentInput>;
  textContent?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostEventPayload = {
  __typename?: 'PostEventPayload';
  post: Post;
  type: Scalars['String']['output'];
};

export type PostListRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostMaxAggregate = {
  __typename?: 'PostMaxAggregate';
  boardId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['String']['output']>;
  scheduleId?: Maybe<Scalars['String']['output']>;
  textContent?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type PostMinAggregate = {
  __typename?: 'PostMinAggregate';
  boardId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['String']['output']>;
  scheduleId?: Maybe<Scalars['String']['output']>;
  textContent?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type PostNullableScalarRelationFilter = {
  is?: InputMaybe<PostWhereInput>;
  isNot?: InputMaybe<PostWhereInput>;
};

export type PostOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PostOrderByWithRelationInput = {
  board?: InputMaybe<BoardOrderByWithRelationInput>;
  boardId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  media?: InputMaybe<MediaOrderByRelationAggregateInput>;
  parent?: InputMaybe<PostOrderByWithRelationInput>;
  replies?: InputMaybe<PostOrderByRelationAggregateInput>;
  schedule?: InputMaybe<ScheduleItemOrderByWithRelationInput>;
  scheduleId?: InputMaybe<SortOrderInput>;
  textContent?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum PostScalarFieldEnum {
  BoardId = 'boardId',
  CreatedAt = 'createdAt',
  Id = 'id',
  ParentId = 'parentId',
  ScheduleId = 'scheduleId',
  TextContent = 'textContent',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type PostScalarWhereInput = {
  AND?: InputMaybe<Array<PostScalarWhereInput>>;
  NOT?: InputMaybe<Array<PostScalarWhereInput>>;
  OR?: InputMaybe<Array<PostScalarWhereInput>>;
  boardId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  scheduleId?: InputMaybe<StringNullableFilter>;
  textContent?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PostUpdateInput = {
  board?: InputMaybe<BoardUpdateOneWithoutPostsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  media?: InputMaybe<MediaUpdateManyWithoutPostNestedInput>;
  parent?: InputMaybe<PostUpdateOneWithoutRepliesNestedInput>;
  replies?: InputMaybe<PostUpdateManyWithoutParentNestedInput>;
  schedule?: InputMaybe<ScheduleItemUpdateOneWithoutPostNestedInput>;
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithWhereWithoutBoardInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithWhereWithoutParentInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithWhereWithoutScheduleInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type PostUpdateManyWithoutBoardNestedInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutBoardInput>>;
  create?: InputMaybe<Array<PostCreateWithoutBoardInput>>;
  createMany?: InputMaybe<PostCreateManyBoardInputEnvelope>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutBoardInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutBoardInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutBoardInput>>;
};

export type PostUpdateManyWithoutParentNestedInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutParentInput>>;
  create?: InputMaybe<Array<PostCreateWithoutParentInput>>;
  createMany?: InputMaybe<PostCreateManyParentInputEnvelope>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutParentInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutParentInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutParentInput>>;
};

export type PostUpdateManyWithoutScheduleNestedInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutScheduleInput>>;
  create?: InputMaybe<Array<PostCreateWithoutScheduleInput>>;
  createMany?: InputMaybe<PostCreateManyScheduleInputEnvelope>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutScheduleInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutScheduleInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutScheduleInput>>;
};

export type PostUpdateOneWithoutRepliesNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutRepliesInput>;
  create?: InputMaybe<PostCreateWithoutRepliesInput>;
  delete?: InputMaybe<PostWhereInput>;
  disconnect?: InputMaybe<PostWhereInput>;
  update?: InputMaybe<PostUpdateToOneWithWhereWithoutRepliesInput>;
  upsert?: InputMaybe<PostUpsertWithoutRepliesInput>;
};

export type PostUpdateToOneWithWhereWithoutRepliesInput = {
  data: PostUpdateWithoutRepliesInput;
  where?: InputMaybe<PostWhereInput>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  data: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithWhereUniqueWithoutBoardInput = {
  data: PostUpdateWithoutBoardInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithWhereUniqueWithoutParentInput = {
  data: PostUpdateWithoutParentInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithWhereUniqueWithoutScheduleInput = {
  data: PostUpdateWithoutScheduleInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithoutAuthorInput = {
  board?: InputMaybe<BoardUpdateOneWithoutPostsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  media?: InputMaybe<MediaUpdateManyWithoutPostNestedInput>;
  parent?: InputMaybe<PostUpdateOneWithoutRepliesNestedInput>;
  replies?: InputMaybe<PostUpdateManyWithoutParentNestedInput>;
  schedule?: InputMaybe<ScheduleItemUpdateOneWithoutPostNestedInput>;
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutBoardInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  media?: InputMaybe<MediaUpdateManyWithoutPostNestedInput>;
  parent?: InputMaybe<PostUpdateOneWithoutRepliesNestedInput>;
  replies?: InputMaybe<PostUpdateManyWithoutParentNestedInput>;
  schedule?: InputMaybe<ScheduleItemUpdateOneWithoutPostNestedInput>;
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutParentInput = {
  board?: InputMaybe<BoardUpdateOneWithoutPostsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  media?: InputMaybe<MediaUpdateManyWithoutPostNestedInput>;
  replies?: InputMaybe<PostUpdateManyWithoutParentNestedInput>;
  schedule?: InputMaybe<ScheduleItemUpdateOneWithoutPostNestedInput>;
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutRepliesInput = {
  board?: InputMaybe<BoardUpdateOneWithoutPostsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  media?: InputMaybe<MediaUpdateManyWithoutPostNestedInput>;
  parent?: InputMaybe<PostUpdateOneWithoutRepliesNestedInput>;
  schedule?: InputMaybe<ScheduleItemUpdateOneWithoutPostNestedInput>;
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutScheduleInput = {
  board?: InputMaybe<BoardUpdateOneWithoutPostsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  media?: InputMaybe<MediaUpdateManyWithoutPostNestedInput>;
  parent?: InputMaybe<PostUpdateOneWithoutRepliesNestedInput>;
  replies?: InputMaybe<PostUpdateManyWithoutParentNestedInput>;
  textContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  update: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithWhereUniqueWithoutBoardInput = {
  create: PostCreateWithoutBoardInput;
  update: PostUpdateWithoutBoardInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithWhereUniqueWithoutParentInput = {
  create: PostCreateWithoutParentInput;
  update: PostUpdateWithoutParentInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithWhereUniqueWithoutScheduleInput = {
  create: PostCreateWithoutScheduleInput;
  update: PostUpdateWithoutScheduleInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithoutRepliesInput = {
  create: PostCreateWithoutRepliesInput;
  update: PostUpdateWithoutRepliesInput;
  where?: InputMaybe<PostWhereInput>;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  board?: InputMaybe<BoardNullableScalarRelationFilter>;
  boardId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  media?: InputMaybe<MediaListRelationFilter>;
  parent?: InputMaybe<PostNullableScalarRelationFilter>;
  replies?: InputMaybe<PostListRelationFilter>;
  schedule?: InputMaybe<ScheduleItemNullableScalarRelationFilter>;
  scheduleId?: InputMaybe<StringNullableFilter>;
  textContent?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PostWhereUniqueInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  board?: InputMaybe<BoardNullableScalarRelationFilter>;
  boardId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<MediaListRelationFilter>;
  parent?: InputMaybe<PostNullableScalarRelationFilter>;
  replies?: InputMaybe<PostListRelationFilter>;
  schedule?: InputMaybe<ScheduleItemNullableScalarRelationFilter>;
  scheduleId?: InputMaybe<StringNullableFilter>;
  textContent?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Query = {
  __typename?: 'Query';
  board?: Maybe<Board>;
  boardFollower?: Maybe<BoardFollower>;
  boardFollowers: Array<BoardFollower>;
  boards: Array<Board>;
  categories: Array<Category>;
  category?: Maybe<Category>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  profile: User;
  root: Scalars['String']['output'];
  schedule?: Maybe<ScheduleItem>;
  schedules: Array<ScheduleItem>;
  user?: Maybe<User>;
  userFollow?: Maybe<UserFollow>;
  userFollows: Array<UserFollow>;
  users: Array<User>;
};


export type QueryBoardArgs = {
  where: BoardWhereUniqueInput;
};


export type QueryBoardFollowerArgs = {
  where: BoardFollowerWhereUniqueInput;
};


export type QueryBoardFollowersArgs = {
  cursor?: InputMaybe<BoardFollowerWhereUniqueInput>;
  distinct?: InputMaybe<Array<BoardFollowerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BoardFollowerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BoardFollowerWhereInput>;
};


export type QueryBoardsArgs = {
  cursor?: InputMaybe<BoardWhereUniqueInput>;
  distinct?: InputMaybe<Array<BoardScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BoardOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BoardWhereInput>;
};


export type QueryCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryScheduleArgs = {
  where: ScheduleItemWhereUniqueInput;
};


export type QuerySchedulesArgs = {
  cursor?: InputMaybe<ScheduleItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<ScheduleItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ScheduleItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduleItemWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserFollowArgs = {
  where: UserFollowWhereUniqueInput;
};


export type QueryUserFollowsArgs = {
  cursor?: InputMaybe<UserFollowWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserFollowScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserFollowOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserFollowWhereInput>;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RefreshToken = {
  __typename?: 'RefreshToken';
  createdAt: Scalars['DateTime']['output'];
  /** Token expiry */
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type RefreshTokenCountAggregate = {
  __typename?: 'RefreshTokenCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  expiresAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type RefreshTokenCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type RefreshTokenCreateManyUserInputEnvelope = {
  data: Array<RefreshTokenCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RefreshTokenCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RefreshTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RefreshTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<RefreshTokenCreateManyUserInputEnvelope>;
};

export type RefreshTokenCreateOrConnectWithoutUserInput = {
  create: RefreshTokenCreateWithoutUserInput;
  where: RefreshTokenWhereUniqueInput;
};

export type RefreshTokenCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type RefreshTokenListRelationFilter = {
  every?: InputMaybe<RefreshTokenWhereInput>;
  none?: InputMaybe<RefreshTokenWhereInput>;
  some?: InputMaybe<RefreshTokenWhereInput>;
};

export type RefreshTokenMaxAggregate = {
  __typename?: 'RefreshTokenMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type RefreshTokenMinAggregate = {
  __typename?: 'RefreshTokenMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type RefreshTokenOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RefreshTokenScalarWhereInput = {
  AND?: InputMaybe<Array<RefreshTokenScalarWhereInput>>;
  NOT?: InputMaybe<Array<RefreshTokenScalarWhereInput>>;
  OR?: InputMaybe<Array<RefreshTokenScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RefreshTokenUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
  data: RefreshTokenUpdateManyMutationInput;
  where: RefreshTokenScalarWhereInput;
};

export type RefreshTokenUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RefreshTokenCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RefreshTokenCreateWithoutUserInput>>;
  createMany?: InputMaybe<RefreshTokenCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RefreshTokenScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  set?: InputMaybe<Array<RefreshTokenWhereUniqueInput>>;
  update?: InputMaybe<Array<RefreshTokenUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<RefreshTokenUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<RefreshTokenUpsertWithWhereUniqueWithoutUserInput>>;
};

export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
  data: RefreshTokenUpdateWithoutUserInput;
  where: RefreshTokenWhereUniqueInput;
};

export type RefreshTokenUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
  create: RefreshTokenCreateWithoutUserInput;
  update: RefreshTokenUpdateWithoutUserInput;
  where: RefreshTokenWhereUniqueInput;
};

export type RefreshTokenWhereInput = {
  AND?: InputMaybe<Array<RefreshTokenWhereInput>>;
  NOT?: InputMaybe<Array<RefreshTokenWhereInput>>;
  OR?: InputMaybe<Array<RefreshTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RefreshTokenWhereUniqueInput = {
  AND?: InputMaybe<Array<RefreshTokenWhereInput>>;
  NOT?: InputMaybe<Array<RefreshTokenWhereInput>>;
  OR?: InputMaybe<Array<RefreshTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum ResourceType {
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type ScheduleEventPayload = {
  __typename?: 'ScheduleEventPayload';
  schedule: ScheduleItem;
  type: Scalars['String']['output'];
};

export type ScheduleItem = {
  __typename?: 'ScheduleItem';
  _count: ScheduleItemCount;
  board?: Maybe<Board>;
  boardId?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: User;
  description?: Maybe<Scalars['String']['output']>;
  endTime: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  post?: Maybe<Array<Post>>;
  startTime: Scalars['DateTime']['output'];
  /** @Example "Team Standup" */
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type ScheduleItemCount = {
  __typename?: 'ScheduleItemCount';
  post: Scalars['Int']['output'];
};

export type ScheduleItemCountAggregate = {
  __typename?: 'ScheduleItemCountAggregate';
  _all: Scalars['Int']['output'];
  boardId: Scalars['Int']['output'];
  categoryId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  endTime: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  startTime: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type ScheduleItemCreateInput = {
  board?: InputMaybe<BoardCreateNestedOneWithoutSchedulesInput>;
  category?: InputMaybe<CategoryCreateNestedOneWithoutSchedulesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endTime: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  post?: InputMaybe<PostCreateNestedManyWithoutScheduleInput>;
  startTime: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduleItemCreateManyBoardInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endTime: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduleItemCreateManyBoardInputEnvelope = {
  data: Array<ScheduleItemCreateManyBoardInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ScheduleItemCreateManyCategoryInput = {
  boardId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endTime: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduleItemCreateManyCategoryInputEnvelope = {
  data: Array<ScheduleItemCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ScheduleItemCreateManyCreatedByInput = {
  boardId?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endTime: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduleItemCreateManyCreatedByInputEnvelope = {
  data: Array<ScheduleItemCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ScheduleItemCreateNestedManyWithoutBoardInput = {
  connect?: InputMaybe<Array<ScheduleItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ScheduleItemCreateOrConnectWithoutBoardInput>>;
  create?: InputMaybe<Array<ScheduleItemCreateWithoutBoardInput>>;
  createMany?: InputMaybe<ScheduleItemCreateManyBoardInputEnvelope>;
};

export type ScheduleItemCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<ScheduleItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ScheduleItemCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<ScheduleItemCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<ScheduleItemCreateManyCategoryInputEnvelope>;
};

export type ScheduleItemCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<ScheduleItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ScheduleItemCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<ScheduleItemCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<ScheduleItemCreateManyCreatedByInputEnvelope>;
};

export type ScheduleItemCreateNestedOneWithoutPostInput = {
  connect?: InputMaybe<ScheduleItemWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ScheduleItemCreateOrConnectWithoutPostInput>;
  create?: InputMaybe<ScheduleItemCreateWithoutPostInput>;
};

export type ScheduleItemCreateOrConnectWithoutBoardInput = {
  create: ScheduleItemCreateWithoutBoardInput;
  where: ScheduleItemWhereUniqueInput;
};

export type ScheduleItemCreateOrConnectWithoutCategoryInput = {
  create: ScheduleItemCreateWithoutCategoryInput;
  where: ScheduleItemWhereUniqueInput;
};

export type ScheduleItemCreateOrConnectWithoutCreatedByInput = {
  create: ScheduleItemCreateWithoutCreatedByInput;
  where: ScheduleItemWhereUniqueInput;
};

export type ScheduleItemCreateOrConnectWithoutPostInput = {
  create: ScheduleItemCreateWithoutPostInput;
  where: ScheduleItemWhereUniqueInput;
};

export type ScheduleItemCreateWithoutBoardInput = {
  category?: InputMaybe<CategoryCreateNestedOneWithoutSchedulesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endTime: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  post?: InputMaybe<PostCreateNestedManyWithoutScheduleInput>;
  startTime: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduleItemCreateWithoutCategoryInput = {
  board?: InputMaybe<BoardCreateNestedOneWithoutSchedulesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endTime: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  post?: InputMaybe<PostCreateNestedManyWithoutScheduleInput>;
  startTime: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduleItemCreateWithoutCreatedByInput = {
  board?: InputMaybe<BoardCreateNestedOneWithoutSchedulesInput>;
  category?: InputMaybe<CategoryCreateNestedOneWithoutSchedulesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endTime: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  post?: InputMaybe<PostCreateNestedManyWithoutScheduleInput>;
  startTime: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduleItemCreateWithoutPostInput = {
  board?: InputMaybe<BoardCreateNestedOneWithoutSchedulesInput>;
  category?: InputMaybe<CategoryCreateNestedOneWithoutSchedulesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endTime: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduleItemListRelationFilter = {
  every?: InputMaybe<ScheduleItemWhereInput>;
  none?: InputMaybe<ScheduleItemWhereInput>;
  some?: InputMaybe<ScheduleItemWhereInput>;
};

export type ScheduleItemMaxAggregate = {
  __typename?: 'ScheduleItemMaxAggregate';
  boardId?: Maybe<Scalars['String']['output']>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ScheduleItemMinAggregate = {
  __typename?: 'ScheduleItemMinAggregate';
  boardId?: Maybe<Scalars['String']['output']>;
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ScheduleItemNullableScalarRelationFilter = {
  is?: InputMaybe<ScheduleItemWhereInput>;
  isNot?: InputMaybe<ScheduleItemWhereInput>;
};

export type ScheduleItemOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ScheduleItemOrderByWithRelationInput = {
  board?: InputMaybe<BoardOrderByWithRelationInput>;
  boardId?: InputMaybe<SortOrderInput>;
  category?: InputMaybe<CategoryOrderByWithRelationInput>;
  categoryId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  endTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByRelationAggregateInput>;
  startTime?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum ScheduleItemScalarFieldEnum {
  BoardId = 'boardId',
  CategoryId = 'categoryId',
  CreatedAt = 'createdAt',
  Description = 'description',
  EndTime = 'endTime',
  Id = 'id',
  StartTime = 'startTime',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ScheduleItemScalarWhereInput = {
  AND?: InputMaybe<Array<ScheduleItemScalarWhereInput>>;
  NOT?: InputMaybe<Array<ScheduleItemScalarWhereInput>>;
  OR?: InputMaybe<Array<ScheduleItemScalarWhereInput>>;
  boardId?: InputMaybe<StringNullableFilter>;
  categoryId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  endTime?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  startTime?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ScheduleItemUpdateInput = {
  board?: InputMaybe<BoardUpdateOneWithoutSchedulesNestedInput>;
  category?: InputMaybe<CategoryUpdateOneWithoutSchedulesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateManyWithoutScheduleNestedInput>;
  startTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScheduleItemUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  startTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScheduleItemUpdateManyWithWhereWithoutBoardInput = {
  data: ScheduleItemUpdateManyMutationInput;
  where: ScheduleItemScalarWhereInput;
};

export type ScheduleItemUpdateManyWithWhereWithoutCategoryInput = {
  data: ScheduleItemUpdateManyMutationInput;
  where: ScheduleItemScalarWhereInput;
};

export type ScheduleItemUpdateManyWithWhereWithoutCreatedByInput = {
  data: ScheduleItemUpdateManyMutationInput;
  where: ScheduleItemScalarWhereInput;
};

export type ScheduleItemUpdateManyWithoutBoardNestedInput = {
  connect?: InputMaybe<Array<ScheduleItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ScheduleItemCreateOrConnectWithoutBoardInput>>;
  create?: InputMaybe<Array<ScheduleItemCreateWithoutBoardInput>>;
  createMany?: InputMaybe<ScheduleItemCreateManyBoardInputEnvelope>;
  delete?: InputMaybe<Array<ScheduleItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ScheduleItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ScheduleItemWhereUniqueInput>>;
  set?: InputMaybe<Array<ScheduleItemWhereUniqueInput>>;
  update?: InputMaybe<Array<ScheduleItemUpdateWithWhereUniqueWithoutBoardInput>>;
  updateMany?: InputMaybe<Array<ScheduleItemUpdateManyWithWhereWithoutBoardInput>>;
  upsert?: InputMaybe<Array<ScheduleItemUpsertWithWhereUniqueWithoutBoardInput>>;
};

export type ScheduleItemUpdateManyWithoutCategoryNestedInput = {
  connect?: InputMaybe<Array<ScheduleItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ScheduleItemCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<ScheduleItemCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<ScheduleItemCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<ScheduleItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ScheduleItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ScheduleItemWhereUniqueInput>>;
  set?: InputMaybe<Array<ScheduleItemWhereUniqueInput>>;
  update?: InputMaybe<Array<ScheduleItemUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<ScheduleItemUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<ScheduleItemUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type ScheduleItemUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<ScheduleItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ScheduleItemCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<ScheduleItemCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<ScheduleItemCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<ScheduleItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ScheduleItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ScheduleItemWhereUniqueInput>>;
  set?: InputMaybe<Array<ScheduleItemWhereUniqueInput>>;
  update?: InputMaybe<Array<ScheduleItemUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<ScheduleItemUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<ScheduleItemUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type ScheduleItemUpdateOneWithoutPostNestedInput = {
  connect?: InputMaybe<ScheduleItemWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ScheduleItemCreateOrConnectWithoutPostInput>;
  create?: InputMaybe<ScheduleItemCreateWithoutPostInput>;
  delete?: InputMaybe<ScheduleItemWhereInput>;
  disconnect?: InputMaybe<ScheduleItemWhereInput>;
  update?: InputMaybe<ScheduleItemUpdateToOneWithWhereWithoutPostInput>;
  upsert?: InputMaybe<ScheduleItemUpsertWithoutPostInput>;
};

export type ScheduleItemUpdateToOneWithWhereWithoutPostInput = {
  data: ScheduleItemUpdateWithoutPostInput;
  where?: InputMaybe<ScheduleItemWhereInput>;
};

export type ScheduleItemUpdateWithWhereUniqueWithoutBoardInput = {
  data: ScheduleItemUpdateWithoutBoardInput;
  where: ScheduleItemWhereUniqueInput;
};

export type ScheduleItemUpdateWithWhereUniqueWithoutCategoryInput = {
  data: ScheduleItemUpdateWithoutCategoryInput;
  where: ScheduleItemWhereUniqueInput;
};

export type ScheduleItemUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: ScheduleItemUpdateWithoutCreatedByInput;
  where: ScheduleItemWhereUniqueInput;
};

export type ScheduleItemUpdateWithoutBoardInput = {
  category?: InputMaybe<CategoryUpdateOneWithoutSchedulesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateManyWithoutScheduleNestedInput>;
  startTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScheduleItemUpdateWithoutCategoryInput = {
  board?: InputMaybe<BoardUpdateOneWithoutSchedulesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateManyWithoutScheduleNestedInput>;
  startTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScheduleItemUpdateWithoutCreatedByInput = {
  board?: InputMaybe<BoardUpdateOneWithoutSchedulesNestedInput>;
  category?: InputMaybe<CategoryUpdateOneWithoutSchedulesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateManyWithoutScheduleNestedInput>;
  startTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScheduleItemUpdateWithoutPostInput = {
  board?: InputMaybe<BoardUpdateOneWithoutSchedulesNestedInput>;
  category?: InputMaybe<CategoryUpdateOneWithoutSchedulesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  endTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  startTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ScheduleItemUpsertWithWhereUniqueWithoutBoardInput = {
  create: ScheduleItemCreateWithoutBoardInput;
  update: ScheduleItemUpdateWithoutBoardInput;
  where: ScheduleItemWhereUniqueInput;
};

export type ScheduleItemUpsertWithWhereUniqueWithoutCategoryInput = {
  create: ScheduleItemCreateWithoutCategoryInput;
  update: ScheduleItemUpdateWithoutCategoryInput;
  where: ScheduleItemWhereUniqueInput;
};

export type ScheduleItemUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: ScheduleItemCreateWithoutCreatedByInput;
  update: ScheduleItemUpdateWithoutCreatedByInput;
  where: ScheduleItemWhereUniqueInput;
};

export type ScheduleItemUpsertWithoutPostInput = {
  create: ScheduleItemCreateWithoutPostInput;
  update: ScheduleItemUpdateWithoutPostInput;
  where?: InputMaybe<ScheduleItemWhereInput>;
};

export type ScheduleItemWhereInput = {
  AND?: InputMaybe<Array<ScheduleItemWhereInput>>;
  NOT?: InputMaybe<Array<ScheduleItemWhereInput>>;
  OR?: InputMaybe<Array<ScheduleItemWhereInput>>;
  board?: InputMaybe<BoardNullableScalarRelationFilter>;
  boardId?: InputMaybe<StringNullableFilter>;
  category?: InputMaybe<CategoryNullableScalarRelationFilter>;
  categoryId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  endTime?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  post?: InputMaybe<PostListRelationFilter>;
  startTime?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ScheduleItemWhereUniqueInput = {
  AND?: InputMaybe<Array<ScheduleItemWhereInput>>;
  NOT?: InputMaybe<Array<ScheduleItemWhereInput>>;
  OR?: InputMaybe<Array<ScheduleItemWhereInput>>;
  board?: InputMaybe<BoardNullableScalarRelationFilter>;
  boardId?: InputMaybe<StringNullableFilter>;
  category?: InputMaybe<CategoryNullableScalarRelationFilter>;
  categoryId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  endTime?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  post?: InputMaybe<PostListRelationFilter>;
  startTime?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Fires whenever a board is created, updated, or removed */
  boardEvents: BoardEventPayload;
  /** Fires when a user subscribes or unsubscribes to a board */
  boardFollowerEvents: BoardFollowerEventPayload;
  /** Fires whenever a category is created, updated, or removed */
  categoryEvents: CategoryEventPayload;
  /** Fires whenever a post is created, updated, or removed */
  postEvents: PostEventPayload;
  /** Fires whenever a schedule is created, updated, or removed */
  scheduleEvents: ScheduleEventPayload;
  /** Fires when a user follows or unfollows another user */
  userFollowEvents: UserFollowEventPayload;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  /** Profile avatar (URL to image) */
  avatar?: Maybe<Scalars['String']['output']>;
  /** Boards created by the user */
  boards?: Maybe<Array<Board>>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['EmailAddress']['output'];
  emailIsVerified: Scalars['Boolean']['output'];
  /** Boards this user is following */
  followedBoards?: Maybe<Array<BoardFollower>>;
  /** Users following this user */
  followers?: Maybe<Array<UserFollow>>;
  /** Users this user is following */
  following?: Maybe<Array<UserFollow>>;
  id: Scalars['ID']['output'];
  /** Posts authored by the user */
  posts?: Maybe<Array<Post>>;
  /** All refresh tokens associated with this user */
  refreshTokens?: Maybe<Array<RefreshToken>>;
  /**
   * User roles for RBAC
   * @Default ["USER"]
   */
  roles?: Maybe<Array<Role>>;
  /** Scheduled items created by the user */
  schedules?: Maybe<Array<ScheduleItem>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserCount = {
  __typename?: 'UserCount';
  boards: Scalars['Int']['output'];
  followedBoards: Scalars['Int']['output'];
  followers: Scalars['Int']['output'];
  following: Scalars['Int']['output'];
  posts: Scalars['Int']['output'];
  refreshTokens: Scalars['Int']['output'];
  schedules: Scalars['Int']['output'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  avatar: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  emailIsVerified: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  roles: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserCreateInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  boards?: InputMaybe<BoardCreateNestedManyWithoutCreatedByInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['EmailAddress']['input'];
  emailIsVerified?: InputMaybe<Scalars['Boolean']['input']>;
  followedBoards?: InputMaybe<BoardFollowerCreateNestedManyWithoutUserInput>;
  followers?: InputMaybe<UserFollowCreateNestedManyWithoutFollowingInput>;
  following?: InputMaybe<UserFollowCreateNestedManyWithoutFollowerInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  refreshTokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<UserCreaterolesInput>;
  schedules?: InputMaybe<ScheduleItemCreateNestedManyWithoutCreatedByInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateNestedOneWithoutFollowersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFollowersInput>;
  create?: InputMaybe<UserCreateWithoutFollowersInput>;
};

export type UserCreateOrConnectWithoutFollowersInput = {
  create: UserCreateWithoutFollowersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutFollowersInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  boards?: InputMaybe<BoardCreateNestedManyWithoutCreatedByInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['EmailAddress']['input'];
  emailIsVerified?: InputMaybe<Scalars['Boolean']['input']>;
  followedBoards?: InputMaybe<BoardFollowerCreateNestedManyWithoutUserInput>;
  following?: InputMaybe<UserFollowCreateNestedManyWithoutFollowerInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
  refreshTokens?: InputMaybe<RefreshTokenCreateNestedManyWithoutUserInput>;
  roles?: InputMaybe<UserCreaterolesInput>;
  schedules?: InputMaybe<ScheduleItemCreateNestedManyWithoutCreatedByInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreaterolesInput = {
  set: Array<Role>;
};

export type UserFollow = {
  __typename?: 'UserFollow';
  createdAt: Scalars['DateTime']['output'];
  follower: User;
  /** The user who follows */
  followerId: Scalars['String']['output'];
  following: User;
  /** The user being followed */
  followingId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type UserFollowCountAggregate = {
  __typename?: 'UserFollowCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  followerId: Scalars['Int']['output'];
  followingId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
};

export type UserFollowCreateManyFollowerInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  followingId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserFollowCreateManyFollowerInputEnvelope = {
  data: Array<UserFollowCreateManyFollowerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserFollowCreateManyFollowingInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserFollowCreateManyFollowingInputEnvelope = {
  data: Array<UserFollowCreateManyFollowingInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserFollowCreateNestedManyWithoutFollowerInput = {
  connect?: InputMaybe<Array<UserFollowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserFollowCreateOrConnectWithoutFollowerInput>>;
  create?: InputMaybe<Array<UserFollowCreateWithoutFollowerInput>>;
  createMany?: InputMaybe<UserFollowCreateManyFollowerInputEnvelope>;
};

export type UserFollowCreateNestedManyWithoutFollowingInput = {
  connect?: InputMaybe<Array<UserFollowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserFollowCreateOrConnectWithoutFollowingInput>>;
  create?: InputMaybe<Array<UserFollowCreateWithoutFollowingInput>>;
  createMany?: InputMaybe<UserFollowCreateManyFollowingInputEnvelope>;
};

export type UserFollowCreateOrConnectWithoutFollowerInput = {
  create: UserFollowCreateWithoutFollowerInput;
  where: UserFollowWhereUniqueInput;
};

export type UserFollowCreateOrConnectWithoutFollowingInput = {
  create: UserFollowCreateWithoutFollowingInput;
  where: UserFollowWhereUniqueInput;
};

export type UserFollowCreateWithoutFollowerInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  following: UserCreateNestedOneWithoutFollowersInput;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserFollowCreateWithoutFollowingInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserFollowEventPayload = {
  __typename?: 'UserFollowEventPayload';
  type: Scalars['String']['output'];
  userFollow: UserFollow;
};

export type UserFollowFollowerIdFollowingIdCompoundUniqueInput = {
  followingId: Scalars['String']['input'];
};

export type UserFollowListRelationFilter = {
  every?: InputMaybe<UserFollowWhereInput>;
  none?: InputMaybe<UserFollowWhereInput>;
  some?: InputMaybe<UserFollowWhereInput>;
};

export type UserFollowMaxAggregate = {
  __typename?: 'UserFollowMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  followerId?: Maybe<Scalars['String']['output']>;
  followingId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type UserFollowMinAggregate = {
  __typename?: 'UserFollowMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  followerId?: Maybe<Scalars['String']['output']>;
  followingId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type UserFollowOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserFollowOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  following?: InputMaybe<UserOrderByWithRelationInput>;
  followingId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export enum UserFollowScalarFieldEnum {
  CreatedAt = 'createdAt',
  FollowerId = 'followerId',
  FollowingId = 'followingId',
  Id = 'id'
}

export type UserFollowScalarWhereInput = {
  AND?: InputMaybe<Array<UserFollowScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserFollowScalarWhereInput>>;
  OR?: InputMaybe<Array<UserFollowScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  followingId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
};

export type UserFollowUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserFollowUpdateManyWithWhereWithoutFollowerInput = {
  data: UserFollowUpdateManyMutationInput;
  where: UserFollowScalarWhereInput;
};

export type UserFollowUpdateManyWithWhereWithoutFollowingInput = {
  data: UserFollowUpdateManyMutationInput;
  where: UserFollowScalarWhereInput;
};

export type UserFollowUpdateManyWithoutFollowerNestedInput = {
  connect?: InputMaybe<Array<UserFollowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserFollowCreateOrConnectWithoutFollowerInput>>;
  create?: InputMaybe<Array<UserFollowCreateWithoutFollowerInput>>;
  createMany?: InputMaybe<UserFollowCreateManyFollowerInputEnvelope>;
  delete?: InputMaybe<Array<UserFollowWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserFollowScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserFollowWhereUniqueInput>>;
  set?: InputMaybe<Array<UserFollowWhereUniqueInput>>;
  update?: InputMaybe<Array<UserFollowUpdateWithWhereUniqueWithoutFollowerInput>>;
  updateMany?: InputMaybe<Array<UserFollowUpdateManyWithWhereWithoutFollowerInput>>;
  upsert?: InputMaybe<Array<UserFollowUpsertWithWhereUniqueWithoutFollowerInput>>;
};

export type UserFollowUpdateManyWithoutFollowingNestedInput = {
  connect?: InputMaybe<Array<UserFollowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserFollowCreateOrConnectWithoutFollowingInput>>;
  create?: InputMaybe<Array<UserFollowCreateWithoutFollowingInput>>;
  createMany?: InputMaybe<UserFollowCreateManyFollowingInputEnvelope>;
  delete?: InputMaybe<Array<UserFollowWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserFollowScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserFollowWhereUniqueInput>>;
  set?: InputMaybe<Array<UserFollowWhereUniqueInput>>;
  update?: InputMaybe<Array<UserFollowUpdateWithWhereUniqueWithoutFollowingInput>>;
  updateMany?: InputMaybe<Array<UserFollowUpdateManyWithWhereWithoutFollowingInput>>;
  upsert?: InputMaybe<Array<UserFollowUpsertWithWhereUniqueWithoutFollowingInput>>;
};

export type UserFollowUpdateWithWhereUniqueWithoutFollowerInput = {
  data: UserFollowUpdateWithoutFollowerInput;
  where: UserFollowWhereUniqueInput;
};

export type UserFollowUpdateWithWhereUniqueWithoutFollowingInput = {
  data: UserFollowUpdateWithoutFollowingInput;
  where: UserFollowWhereUniqueInput;
};

export type UserFollowUpdateWithoutFollowerInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  following?: InputMaybe<UserUpdateOneRequiredWithoutFollowersNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserFollowUpdateWithoutFollowingInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserFollowUpsertWithWhereUniqueWithoutFollowerInput = {
  create: UserFollowCreateWithoutFollowerInput;
  update: UserFollowUpdateWithoutFollowerInput;
  where: UserFollowWhereUniqueInput;
};

export type UserFollowUpsertWithWhereUniqueWithoutFollowingInput = {
  create: UserFollowCreateWithoutFollowingInput;
  update: UserFollowUpdateWithoutFollowingInput;
  where: UserFollowWhereUniqueInput;
};

export type UserFollowWhereInput = {
  AND?: InputMaybe<Array<UserFollowWhereInput>>;
  NOT?: InputMaybe<Array<UserFollowWhereInput>>;
  OR?: InputMaybe<Array<UserFollowWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  following?: InputMaybe<UserScalarRelationFilter>;
  followingId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
};

export type UserFollowWhereUniqueInput = {
  AND?: InputMaybe<Array<UserFollowWhereInput>>;
  NOT?: InputMaybe<Array<UserFollowWhereInput>>;
  OR?: InputMaybe<Array<UserFollowWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  followerId_followingId?: InputMaybe<UserFollowFollowerIdFollowingIdCompoundUniqueInput>;
  following?: InputMaybe<UserScalarRelationFilter>;
  followingId?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  emailIsVerified?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  emailIsVerified?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserOrderByWithRelationInput = {
  avatar?: InputMaybe<SortOrderInput>;
  boards?: InputMaybe<BoardOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailIsVerified?: InputMaybe<SortOrder>;
  followedBoards?: InputMaybe<BoardFollowerOrderByRelationAggregateInput>;
  followers?: InputMaybe<UserFollowOrderByRelationAggregateInput>;
  following?: InputMaybe<UserFollowOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  posts?: InputMaybe<PostOrderByRelationAggregateInput>;
  refreshTokens?: InputMaybe<RefreshTokenOrderByRelationAggregateInput>;
  roles?: InputMaybe<SortOrder>;
  schedules?: InputMaybe<ScheduleItemOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  Avatar = 'avatar',
  CreatedAt = 'createdAt',
  Email = 'email',
  EmailIsVerified = 'emailIsVerified',
  Id = 'id',
  Password = 'password',
  Roles = 'roles',
  UpdatedAt = 'updatedAt'
}

export type UserScalarRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  boards?: InputMaybe<BoardUpdateManyWithoutCreatedByNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailIsVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  followedBoards?: InputMaybe<BoardFollowerUpdateManyWithoutUserNestedInput>;
  followers?: InputMaybe<UserFollowUpdateManyWithoutFollowingNestedInput>;
  following?: InputMaybe<UserFollowUpdateManyWithoutFollowerNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorNestedInput>;
  refreshTokens?: InputMaybe<RefreshTokenUpdateManyWithoutUserNestedInput>;
  roles?: InputMaybe<UserUpdaterolesInput>;
  schedules?: InputMaybe<ScheduleItemUpdateManyWithoutCreatedByNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutFollowersNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFollowersInput>;
  create?: InputMaybe<UserCreateWithoutFollowersInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutFollowersInput>;
  upsert?: InputMaybe<UserUpsertWithoutFollowersInput>;
};

export type UserUpdateToOneWithWhereWithoutFollowersInput = {
  data: UserUpdateWithoutFollowersInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutFollowersInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  boards?: InputMaybe<BoardUpdateManyWithoutCreatedByNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailIsVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  followedBoards?: InputMaybe<BoardFollowerUpdateManyWithoutUserNestedInput>;
  following?: InputMaybe<UserFollowUpdateManyWithoutFollowerNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorNestedInput>;
  refreshTokens?: InputMaybe<RefreshTokenUpdateManyWithoutUserNestedInput>;
  roles?: InputMaybe<UserUpdaterolesInput>;
  schedules?: InputMaybe<ScheduleItemUpdateManyWithoutCreatedByNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdaterolesInput = {
  push?: InputMaybe<Array<Role>>;
  set?: InputMaybe<Array<Role>>;
};

export type UserUpsertWithoutFollowersInput = {
  create: UserCreateWithoutFollowersInput;
  update: UserUpdateWithoutFollowersInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avatar?: InputMaybe<StringNullableFilter>;
  boards?: InputMaybe<BoardListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailIsVerified?: InputMaybe<BoolFilter>;
  followedBoards?: InputMaybe<BoardFollowerListRelationFilter>;
  followers?: InputMaybe<UserFollowListRelationFilter>;
  following?: InputMaybe<UserFollowListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
  refreshTokens?: InputMaybe<RefreshTokenListRelationFilter>;
  roles?: InputMaybe<EnumRoleNullableListFilter>;
  schedules?: InputMaybe<ScheduleItemListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avatar?: InputMaybe<StringNullableFilter>;
  boards?: InputMaybe<BoardListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  emailIsVerified?: InputMaybe<BoolFilter>;
  followedBoards?: InputMaybe<BoardFollowerListRelationFilter>;
  followers?: InputMaybe<UserFollowListRelationFilter>;
  following?: InputMaybe<UserFollowListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
  refreshTokens?: InputMaybe<RefreshTokenListRelationFilter>;
  roles?: InputMaybe<EnumRoleNullableListFilter>;
  schedules?: InputMaybe<ScheduleItemListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CreateUserMutationVariables = Exact<{
  email: Scalars['EmailAddress']['input'];
  password: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, email: any, avatar?: string | null } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', accessToken?: string | null, refreshToken?: string | null, user?: { __typename?: 'User', id: string, email: any } | null } };


export const CreateUserDocument = gql`
    mutation CreateUser($email: EmailAddress!, $password: String!) {
  createUser(data: {email: $email, password: $password}) {
    id
    email
    avatar
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(input: {email: $email, password: $password}) {
    accessToken
    refreshToken
    user {
      id
      email
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;