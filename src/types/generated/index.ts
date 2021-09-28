export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	Date: any
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
	JSON: any
}

export type AvifOptions = {
	lossless?: Maybe<Scalars['Boolean']>
	quality?: Maybe<Scalars['Int']>
	speed?: Maybe<Scalars['Int']>
}

export type BlurredOptions = {
	/** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
	toFormat?: Maybe<ImageFormat>
	/** Width of the generated low-res preview. Default is 20px */
	width?: Maybe<Scalars['Int']>
}

export type BooleanQueryOperatorInput = {
	eq?: Maybe<Scalars['Boolean']>
	in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
	ne?: Maybe<Scalars['Boolean']>
	nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type DateQueryOperatorInput = {
	eq?: Maybe<Scalars['Date']>
	gt?: Maybe<Scalars['Date']>
	gte?: Maybe<Scalars['Date']>
	in?: Maybe<Array<Maybe<Scalars['Date']>>>
	lt?: Maybe<Scalars['Date']>
	lte?: Maybe<Scalars['Date']>
	ne?: Maybe<Scalars['Date']>
	nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
	__typename?: 'Directory'
	absolutePath: Scalars['String']
	accessTime: Scalars['Date']
	atime: Scalars['Date']
	atimeMs: Scalars['Float']
	base: Scalars['String']
	birthTime: Scalars['Date']
	/** @deprecated Use `birthTime` instead */
	birthtime?: Maybe<Scalars['Date']>
	/** @deprecated Use `birthTime` instead */
	birthtimeMs?: Maybe<Scalars['Float']>
	blksize?: Maybe<Scalars['Int']>
	blocks?: Maybe<Scalars['Int']>
	changeTime: Scalars['Date']
	children: Array<Node>
	ctime: Scalars['Date']
	ctimeMs: Scalars['Float']
	dev: Scalars['Int']
	dir: Scalars['String']
	ext: Scalars['String']
	extension: Scalars['String']
	gid: Scalars['Int']
	id: Scalars['ID']
	ino: Scalars['Float']
	internal: Internal
	mode: Scalars['Int']
	modifiedTime: Scalars['Date']
	mtime: Scalars['Date']
	mtimeMs: Scalars['Float']
	name: Scalars['String']
	nlink: Scalars['Int']
	parent?: Maybe<Node>
	prettySize: Scalars['String']
	rdev: Scalars['Int']
	relativeDirectory: Scalars['String']
	relativePath: Scalars['String']
	root: Scalars['String']
	size: Scalars['Int']
	sourceInstanceName: Scalars['String']
	uid: Scalars['Int']
}

export type DirectoryAccessTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryModifiedTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
	__typename?: 'DirectoryConnection'
	distinct: Array<Scalars['String']>
	edges: Array<DirectoryEdge>
	group: Array<DirectoryGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<Directory>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type DirectoryConnectionDistinctArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
	field: DirectoryFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type DirectoryConnectionMaxArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryConnectionMinArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryConnectionSumArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
	__typename?: 'DirectoryEdge'
	next?: Maybe<Directory>
	node: Directory
	previous?: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
	AbsolutePath = 'absolutePath',
	AccessTime = 'accessTime',
	Atime = 'atime',
	AtimeMs = 'atimeMs',
	Base = 'base',
	BirthTime = 'birthTime',
	Birthtime = 'birthtime',
	BirthtimeMs = 'birthtimeMs',
	Blksize = 'blksize',
	Blocks = 'blocks',
	ChangeTime = 'changeTime',
	Children = 'children',
	ChildrenChildren = 'children___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenId = 'children___id',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentParentId = 'children___parent___parent___id',
	Ctime = 'ctime',
	CtimeMs = 'ctimeMs',
	Dev = 'dev',
	Dir = 'dir',
	Ext = 'ext',
	Extension = 'extension',
	Gid = 'gid',
	Id = 'id',
	Ino = 'ino',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	Mode = 'mode',
	ModifiedTime = 'modifiedTime',
	Mtime = 'mtime',
	MtimeMs = 'mtimeMs',
	Name = 'name',
	Nlink = 'nlink',
	ParentChildren = 'parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentId = 'parent___id',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentId = 'parent___parent___id',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentParentId = 'parent___parent___parent___id',
	PrettySize = 'prettySize',
	Rdev = 'rdev',
	RelativeDirectory = 'relativeDirectory',
	RelativePath = 'relativePath',
	Root = 'root',
	Size = 'size',
	SourceInstanceName = 'sourceInstanceName',
	Uid = 'uid',
}

export type DirectoryFilterInput = {
	absolutePath?: Maybe<StringQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	blksize?: Maybe<IntQueryOperatorInput>
	blocks?: Maybe<IntQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	ctime?: Maybe<DateQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	mode?: Maybe<IntQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
}

export type DirectoryGroupConnection = {
	__typename?: 'DirectoryGroupConnection'
	distinct: Array<Scalars['String']>
	edges: Array<DirectoryEdge>
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
	group: Array<DirectoryGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<Directory>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type DirectoryGroupConnectionDistinctArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionGroupArgs = {
	field: DirectoryFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type DirectoryGroupConnectionMaxArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionMinArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionSumArgs = {
	field: DirectoryFieldsEnum
}

export type DirectorySortInput = {
	fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type DuotoneGradient = {
	highlight: Scalars['String']
	opacity?: Maybe<Scalars['Int']>
	shadow: Scalars['String']
}

export type File = Node & {
	__typename?: 'File'
	absolutePath: Scalars['String']
	accessTime: Scalars['Date']
	atime: Scalars['Date']
	atimeMs: Scalars['Float']
	base: Scalars['String']
	birthTime: Scalars['Date']
	/** @deprecated Use `birthTime` instead */
	birthtime?: Maybe<Scalars['Date']>
	/** @deprecated Use `birthTime` instead */
	birthtimeMs?: Maybe<Scalars['Float']>
	blksize?: Maybe<Scalars['Int']>
	blocks?: Maybe<Scalars['Int']>
	changeTime: Scalars['Date']
	/** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
	childImageSharp?: Maybe<ImageSharp>
	/** Returns the first child node of type Mdx or null if there are no children of given type on this node */
	childMdx?: Maybe<Mdx>
	children: Array<Node>
	/** Returns all children nodes filtered by type ImageSharp */
	childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>
	/** Returns all children nodes filtered by type Mdx */
	childrenMdx?: Maybe<Array<Maybe<Mdx>>>
	ctime: Scalars['Date']
	ctimeMs: Scalars['Float']
	dev: Scalars['Int']
	dir: Scalars['String']
	ext: Scalars['String']
	extension: Scalars['String']
	gid: Scalars['Int']
	id: Scalars['ID']
	ino: Scalars['Float']
	internal: Internal
	mode: Scalars['Int']
	modifiedTime: Scalars['Date']
	mtime: Scalars['Date']
	mtimeMs: Scalars['Float']
	name: Scalars['String']
	nlink: Scalars['Int']
	parent?: Maybe<Node>
	prettySize: Scalars['String']
	/** Copy file to static directory and return public url to it */
	publicURL?: Maybe<Scalars['String']>
	rdev: Scalars['Int']
	relativeDirectory: Scalars['String']
	relativePath: Scalars['String']
	root: Scalars['String']
	size: Scalars['Int']
	sourceInstanceName: Scalars['String']
	uid: Scalars['Int']
	url?: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type FileModifiedTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type FileConnection = {
	__typename?: 'FileConnection'
	distinct: Array<Scalars['String']>
	edges: Array<FileEdge>
	group: Array<FileGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<File>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type FileConnectionDistinctArgs = {
	field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
	field: FileFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type FileConnectionMaxArgs = {
	field: FileFieldsEnum
}

export type FileConnectionMinArgs = {
	field: FileFieldsEnum
}

export type FileConnectionSumArgs = {
	field: FileFieldsEnum
}

export type FileEdge = {
	__typename?: 'FileEdge'
	next?: Maybe<File>
	node: File
	previous?: Maybe<File>
}

export enum FileFieldsEnum {
	AbsolutePath = 'absolutePath',
	AccessTime = 'accessTime',
	Atime = 'atime',
	AtimeMs = 'atimeMs',
	Base = 'base',
	BirthTime = 'birthTime',
	Birthtime = 'birthtime',
	BirthtimeMs = 'birthtimeMs',
	Blksize = 'blksize',
	Blocks = 'blocks',
	ChangeTime = 'changeTime',
	ChildImageSharpChildren = 'childImageSharp___children',
	ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
	ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
	ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
	ChildImageSharpChildrenId = 'childImageSharp___children___id',
	ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
	ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
	ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
	ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
	ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
	ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
	ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
	ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
	ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
	ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
	ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
	ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
	ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
	ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
	ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
	ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
	ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
	ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
	ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
	ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
	ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
	ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
	ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
	ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
	ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
	ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
	ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
	ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
	ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
	ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
	ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
	ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
	ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
	ChildImageSharpId = 'childImageSharp___id',
	ChildImageSharpInternalContent = 'childImageSharp___internal___content',
	ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
	ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
	ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
	ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
	ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
	ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
	ChildImageSharpInternalType = 'childImageSharp___internal___type',
	ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
	ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
	ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
	ChildImageSharpParentChildren = 'childImageSharp___parent___children',
	ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
	ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
	ChildImageSharpParentId = 'childImageSharp___parent___id',
	ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
	ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
	ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
	ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
	ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
	ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
	ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
	ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
	ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
	ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
	ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
	ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
	ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
	ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
	ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
	ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
	ChildMdxBody = 'childMdx___body',
	ChildMdxChildren = 'childMdx___children',
	ChildMdxChildrenChildren = 'childMdx___children___children',
	ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
	ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
	ChildMdxChildrenId = 'childMdx___children___id',
	ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
	ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
	ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
	ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
	ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
	ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
	ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
	ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
	ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
	ChildMdxChildrenParentId = 'childMdx___children___parent___id',
	ChildMdxExcerpt = 'childMdx___excerpt',
	ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
	ChildMdxFrontmatterAuthor = 'childMdx___frontmatter___author',
	ChildMdxFrontmatterDescription = 'childMdx___frontmatter___description',
	ChildMdxFrontmatterEmbeddedImagesLocal = 'childMdx___frontmatter___embeddedImagesLocal',
	ChildMdxFrontmatterEmbeddedImagesLocalAbsolutePath = 'childMdx___frontmatter___embeddedImagesLocal___absolutePath',
	ChildMdxFrontmatterEmbeddedImagesLocalAccessTime = 'childMdx___frontmatter___embeddedImagesLocal___accessTime',
	ChildMdxFrontmatterEmbeddedImagesLocalAtime = 'childMdx___frontmatter___embeddedImagesLocal___atime',
	ChildMdxFrontmatterEmbeddedImagesLocalAtimeMs = 'childMdx___frontmatter___embeddedImagesLocal___atimeMs',
	ChildMdxFrontmatterEmbeddedImagesLocalBase = 'childMdx___frontmatter___embeddedImagesLocal___base',
	ChildMdxFrontmatterEmbeddedImagesLocalBirthTime = 'childMdx___frontmatter___embeddedImagesLocal___birthTime',
	ChildMdxFrontmatterEmbeddedImagesLocalBirthtime = 'childMdx___frontmatter___embeddedImagesLocal___birthtime',
	ChildMdxFrontmatterEmbeddedImagesLocalBirthtimeMs = 'childMdx___frontmatter___embeddedImagesLocal___birthtimeMs',
	ChildMdxFrontmatterEmbeddedImagesLocalBlksize = 'childMdx___frontmatter___embeddedImagesLocal___blksize',
	ChildMdxFrontmatterEmbeddedImagesLocalBlocks = 'childMdx___frontmatter___embeddedImagesLocal___blocks',
	ChildMdxFrontmatterEmbeddedImagesLocalChangeTime = 'childMdx___frontmatter___embeddedImagesLocal___changeTime',
	ChildMdxFrontmatterEmbeddedImagesLocalChildren = 'childMdx___frontmatter___embeddedImagesLocal___children',
	ChildMdxFrontmatterEmbeddedImagesLocalChildrenImageSharp = 'childMdx___frontmatter___embeddedImagesLocal___childrenImageSharp',
	ChildMdxFrontmatterEmbeddedImagesLocalChildrenMdx = 'childMdx___frontmatter___embeddedImagesLocal___childrenMdx',
	ChildMdxFrontmatterEmbeddedImagesLocalCtime = 'childMdx___frontmatter___embeddedImagesLocal___ctime',
	ChildMdxFrontmatterEmbeddedImagesLocalCtimeMs = 'childMdx___frontmatter___embeddedImagesLocal___ctimeMs',
	ChildMdxFrontmatterEmbeddedImagesLocalDev = 'childMdx___frontmatter___embeddedImagesLocal___dev',
	ChildMdxFrontmatterEmbeddedImagesLocalDir = 'childMdx___frontmatter___embeddedImagesLocal___dir',
	ChildMdxFrontmatterEmbeddedImagesLocalExt = 'childMdx___frontmatter___embeddedImagesLocal___ext',
	ChildMdxFrontmatterEmbeddedImagesLocalExtension = 'childMdx___frontmatter___embeddedImagesLocal___extension',
	ChildMdxFrontmatterEmbeddedImagesLocalGid = 'childMdx___frontmatter___embeddedImagesLocal___gid',
	ChildMdxFrontmatterEmbeddedImagesLocalId = 'childMdx___frontmatter___embeddedImagesLocal___id',
	ChildMdxFrontmatterEmbeddedImagesLocalIno = 'childMdx___frontmatter___embeddedImagesLocal___ino',
	ChildMdxFrontmatterEmbeddedImagesLocalMode = 'childMdx___frontmatter___embeddedImagesLocal___mode',
	ChildMdxFrontmatterEmbeddedImagesLocalModifiedTime = 'childMdx___frontmatter___embeddedImagesLocal___modifiedTime',
	ChildMdxFrontmatterEmbeddedImagesLocalMtime = 'childMdx___frontmatter___embeddedImagesLocal___mtime',
	ChildMdxFrontmatterEmbeddedImagesLocalMtimeMs = 'childMdx___frontmatter___embeddedImagesLocal___mtimeMs',
	ChildMdxFrontmatterEmbeddedImagesLocalName = 'childMdx___frontmatter___embeddedImagesLocal___name',
	ChildMdxFrontmatterEmbeddedImagesLocalNlink = 'childMdx___frontmatter___embeddedImagesLocal___nlink',
	ChildMdxFrontmatterEmbeddedImagesLocalPrettySize = 'childMdx___frontmatter___embeddedImagesLocal___prettySize',
	ChildMdxFrontmatterEmbeddedImagesLocalPublicUrl = 'childMdx___frontmatter___embeddedImagesLocal___publicURL',
	ChildMdxFrontmatterEmbeddedImagesLocalRdev = 'childMdx___frontmatter___embeddedImagesLocal___rdev',
	ChildMdxFrontmatterEmbeddedImagesLocalRelativeDirectory = 'childMdx___frontmatter___embeddedImagesLocal___relativeDirectory',
	ChildMdxFrontmatterEmbeddedImagesLocalRelativePath = 'childMdx___frontmatter___embeddedImagesLocal___relativePath',
	ChildMdxFrontmatterEmbeddedImagesLocalRoot = 'childMdx___frontmatter___embeddedImagesLocal___root',
	ChildMdxFrontmatterEmbeddedImagesLocalSize = 'childMdx___frontmatter___embeddedImagesLocal___size',
	ChildMdxFrontmatterEmbeddedImagesLocalSourceInstanceName = 'childMdx___frontmatter___embeddedImagesLocal___sourceInstanceName',
	ChildMdxFrontmatterEmbeddedImagesLocalUid = 'childMdx___frontmatter___embeddedImagesLocal___uid',
	ChildMdxFrontmatterEmbeddedImagesLocalUrl = 'childMdx___frontmatter___embeddedImagesLocal___url',
	ChildMdxFrontmatterEmbeddedImagesRemote = 'childMdx___frontmatter___embeddedImagesRemote',
	ChildMdxFrontmatterEmbeddedImagesRemoteAbsolutePath = 'childMdx___frontmatter___embeddedImagesRemote___absolutePath',
	ChildMdxFrontmatterEmbeddedImagesRemoteAccessTime = 'childMdx___frontmatter___embeddedImagesRemote___accessTime',
	ChildMdxFrontmatterEmbeddedImagesRemoteAtime = 'childMdx___frontmatter___embeddedImagesRemote___atime',
	ChildMdxFrontmatterEmbeddedImagesRemoteAtimeMs = 'childMdx___frontmatter___embeddedImagesRemote___atimeMs',
	ChildMdxFrontmatterEmbeddedImagesRemoteBase = 'childMdx___frontmatter___embeddedImagesRemote___base',
	ChildMdxFrontmatterEmbeddedImagesRemoteBirthTime = 'childMdx___frontmatter___embeddedImagesRemote___birthTime',
	ChildMdxFrontmatterEmbeddedImagesRemoteBirthtime = 'childMdx___frontmatter___embeddedImagesRemote___birthtime',
	ChildMdxFrontmatterEmbeddedImagesRemoteBirthtimeMs = 'childMdx___frontmatter___embeddedImagesRemote___birthtimeMs',
	ChildMdxFrontmatterEmbeddedImagesRemoteBlksize = 'childMdx___frontmatter___embeddedImagesRemote___blksize',
	ChildMdxFrontmatterEmbeddedImagesRemoteBlocks = 'childMdx___frontmatter___embeddedImagesRemote___blocks',
	ChildMdxFrontmatterEmbeddedImagesRemoteChangeTime = 'childMdx___frontmatter___embeddedImagesRemote___changeTime',
	ChildMdxFrontmatterEmbeddedImagesRemoteChildren = 'childMdx___frontmatter___embeddedImagesRemote___children',
	ChildMdxFrontmatterEmbeddedImagesRemoteChildrenImageSharp = 'childMdx___frontmatter___embeddedImagesRemote___childrenImageSharp',
	ChildMdxFrontmatterEmbeddedImagesRemoteChildrenMdx = 'childMdx___frontmatter___embeddedImagesRemote___childrenMdx',
	ChildMdxFrontmatterEmbeddedImagesRemoteCtime = 'childMdx___frontmatter___embeddedImagesRemote___ctime',
	ChildMdxFrontmatterEmbeddedImagesRemoteCtimeMs = 'childMdx___frontmatter___embeddedImagesRemote___ctimeMs',
	ChildMdxFrontmatterEmbeddedImagesRemoteDev = 'childMdx___frontmatter___embeddedImagesRemote___dev',
	ChildMdxFrontmatterEmbeddedImagesRemoteDir = 'childMdx___frontmatter___embeddedImagesRemote___dir',
	ChildMdxFrontmatterEmbeddedImagesRemoteExt = 'childMdx___frontmatter___embeddedImagesRemote___ext',
	ChildMdxFrontmatterEmbeddedImagesRemoteExtension = 'childMdx___frontmatter___embeddedImagesRemote___extension',
	ChildMdxFrontmatterEmbeddedImagesRemoteGid = 'childMdx___frontmatter___embeddedImagesRemote___gid',
	ChildMdxFrontmatterEmbeddedImagesRemoteId = 'childMdx___frontmatter___embeddedImagesRemote___id',
	ChildMdxFrontmatterEmbeddedImagesRemoteIno = 'childMdx___frontmatter___embeddedImagesRemote___ino',
	ChildMdxFrontmatterEmbeddedImagesRemoteMode = 'childMdx___frontmatter___embeddedImagesRemote___mode',
	ChildMdxFrontmatterEmbeddedImagesRemoteModifiedTime = 'childMdx___frontmatter___embeddedImagesRemote___modifiedTime',
	ChildMdxFrontmatterEmbeddedImagesRemoteMtime = 'childMdx___frontmatter___embeddedImagesRemote___mtime',
	ChildMdxFrontmatterEmbeddedImagesRemoteMtimeMs = 'childMdx___frontmatter___embeddedImagesRemote___mtimeMs',
	ChildMdxFrontmatterEmbeddedImagesRemoteName = 'childMdx___frontmatter___embeddedImagesRemote___name',
	ChildMdxFrontmatterEmbeddedImagesRemoteNlink = 'childMdx___frontmatter___embeddedImagesRemote___nlink',
	ChildMdxFrontmatterEmbeddedImagesRemotePrettySize = 'childMdx___frontmatter___embeddedImagesRemote___prettySize',
	ChildMdxFrontmatterEmbeddedImagesRemotePublicUrl = 'childMdx___frontmatter___embeddedImagesRemote___publicURL',
	ChildMdxFrontmatterEmbeddedImagesRemoteRdev = 'childMdx___frontmatter___embeddedImagesRemote___rdev',
	ChildMdxFrontmatterEmbeddedImagesRemoteRelativeDirectory = 'childMdx___frontmatter___embeddedImagesRemote___relativeDirectory',
	ChildMdxFrontmatterEmbeddedImagesRemoteRelativePath = 'childMdx___frontmatter___embeddedImagesRemote___relativePath',
	ChildMdxFrontmatterEmbeddedImagesRemoteRoot = 'childMdx___frontmatter___embeddedImagesRemote___root',
	ChildMdxFrontmatterEmbeddedImagesRemoteSize = 'childMdx___frontmatter___embeddedImagesRemote___size',
	ChildMdxFrontmatterEmbeddedImagesRemoteSourceInstanceName = 'childMdx___frontmatter___embeddedImagesRemote___sourceInstanceName',
	ChildMdxFrontmatterEmbeddedImagesRemoteUid = 'childMdx___frontmatter___embeddedImagesRemote___uid',
	ChildMdxFrontmatterEmbeddedImagesRemoteUrl = 'childMdx___frontmatter___embeddedImagesRemote___url',
	ChildMdxFrontmatterFeatured = 'childMdx___frontmatter___featured',
	ChildMdxFrontmatterFeaturedImageAbsolutePath = 'childMdx___frontmatter___featuredImage___absolutePath',
	ChildMdxFrontmatterFeaturedImageAccessTime = 'childMdx___frontmatter___featuredImage___accessTime',
	ChildMdxFrontmatterFeaturedImageAtime = 'childMdx___frontmatter___featuredImage___atime',
	ChildMdxFrontmatterFeaturedImageAtimeMs = 'childMdx___frontmatter___featuredImage___atimeMs',
	ChildMdxFrontmatterFeaturedImageBase = 'childMdx___frontmatter___featuredImage___base',
	ChildMdxFrontmatterFeaturedImageBirthTime = 'childMdx___frontmatter___featuredImage___birthTime',
	ChildMdxFrontmatterFeaturedImageBirthtime = 'childMdx___frontmatter___featuredImage___birthtime',
	ChildMdxFrontmatterFeaturedImageBirthtimeMs = 'childMdx___frontmatter___featuredImage___birthtimeMs',
	ChildMdxFrontmatterFeaturedImageBlksize = 'childMdx___frontmatter___featuredImage___blksize',
	ChildMdxFrontmatterFeaturedImageBlocks = 'childMdx___frontmatter___featuredImage___blocks',
	ChildMdxFrontmatterFeaturedImageChangeTime = 'childMdx___frontmatter___featuredImage___changeTime',
	ChildMdxFrontmatterFeaturedImageChildren = 'childMdx___frontmatter___featuredImage___children',
	ChildMdxFrontmatterFeaturedImageChildrenImageSharp = 'childMdx___frontmatter___featuredImage___childrenImageSharp',
	ChildMdxFrontmatterFeaturedImageChildrenMdx = 'childMdx___frontmatter___featuredImage___childrenMdx',
	ChildMdxFrontmatterFeaturedImageCtime = 'childMdx___frontmatter___featuredImage___ctime',
	ChildMdxFrontmatterFeaturedImageCtimeMs = 'childMdx___frontmatter___featuredImage___ctimeMs',
	ChildMdxFrontmatterFeaturedImageDev = 'childMdx___frontmatter___featuredImage___dev',
	ChildMdxFrontmatterFeaturedImageDir = 'childMdx___frontmatter___featuredImage___dir',
	ChildMdxFrontmatterFeaturedImageExt = 'childMdx___frontmatter___featuredImage___ext',
	ChildMdxFrontmatterFeaturedImageExtension = 'childMdx___frontmatter___featuredImage___extension',
	ChildMdxFrontmatterFeaturedImageGid = 'childMdx___frontmatter___featuredImage___gid',
	ChildMdxFrontmatterFeaturedImageId = 'childMdx___frontmatter___featuredImage___id',
	ChildMdxFrontmatterFeaturedImageIno = 'childMdx___frontmatter___featuredImage___ino',
	ChildMdxFrontmatterFeaturedImageMode = 'childMdx___frontmatter___featuredImage___mode',
	ChildMdxFrontmatterFeaturedImageModifiedTime = 'childMdx___frontmatter___featuredImage___modifiedTime',
	ChildMdxFrontmatterFeaturedImageMtime = 'childMdx___frontmatter___featuredImage___mtime',
	ChildMdxFrontmatterFeaturedImageMtimeMs = 'childMdx___frontmatter___featuredImage___mtimeMs',
	ChildMdxFrontmatterFeaturedImageName = 'childMdx___frontmatter___featuredImage___name',
	ChildMdxFrontmatterFeaturedImageNlink = 'childMdx___frontmatter___featuredImage___nlink',
	ChildMdxFrontmatterFeaturedImagePrettySize = 'childMdx___frontmatter___featuredImage___prettySize',
	ChildMdxFrontmatterFeaturedImagePublicUrl = 'childMdx___frontmatter___featuredImage___publicURL',
	ChildMdxFrontmatterFeaturedImageRdev = 'childMdx___frontmatter___featuredImage___rdev',
	ChildMdxFrontmatterFeaturedImageRelativeDirectory = 'childMdx___frontmatter___featuredImage___relativeDirectory',
	ChildMdxFrontmatterFeaturedImageRelativePath = 'childMdx___frontmatter___featuredImage___relativePath',
	ChildMdxFrontmatterFeaturedImageRoot = 'childMdx___frontmatter___featuredImage___root',
	ChildMdxFrontmatterFeaturedImageSize = 'childMdx___frontmatter___featuredImage___size',
	ChildMdxFrontmatterFeaturedImageSourceInstanceName = 'childMdx___frontmatter___featuredImage___sourceInstanceName',
	ChildMdxFrontmatterFeaturedImageUid = 'childMdx___frontmatter___featuredImage___uid',
	ChildMdxFrontmatterFeaturedImageUrl = 'childMdx___frontmatter___featuredImage___url',
	ChildMdxFrontmatterPublished = 'childMdx___frontmatter___published',
	ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
	ChildMdxFrontmatterUpdated = 'childMdx___frontmatter___updated',
	ChildMdxGatsbyPath = 'childMdx___gatsbyPath',
	ChildMdxHeadings = 'childMdx___headings',
	ChildMdxHeadingsDepth = 'childMdx___headings___depth',
	ChildMdxHeadingsValue = 'childMdx___headings___value',
	ChildMdxHtml = 'childMdx___html',
	ChildMdxId = 'childMdx___id',
	ChildMdxInternalContent = 'childMdx___internal___content',
	ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
	ChildMdxInternalDescription = 'childMdx___internal___description',
	ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
	ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
	ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
	ChildMdxInternalOwner = 'childMdx___internal___owner',
	ChildMdxInternalType = 'childMdx___internal___type',
	ChildMdxMdxAst = 'childMdx___mdxAST',
	ChildMdxParentChildren = 'childMdx___parent___children',
	ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
	ChildMdxParentChildrenId = 'childMdx___parent___children___id',
	ChildMdxParentId = 'childMdx___parent___id',
	ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
	ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
	ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
	ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
	ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
	ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
	ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
	ChildMdxParentInternalType = 'childMdx___parent___internal___type',
	ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
	ChildMdxParentParentId = 'childMdx___parent___parent___id',
	ChildMdxRawBody = 'childMdx___rawBody',
	ChildMdxSlug = 'childMdx___slug',
	ChildMdxTableOfContents = 'childMdx___tableOfContents',
	ChildMdxTimeToRead = 'childMdx___timeToRead',
	ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
	ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
	ChildMdxWordCountWords = 'childMdx___wordCount___words',
	Children = 'children',
	ChildrenImageSharp = 'childrenImageSharp',
	ChildrenImageSharpChildren = 'childrenImageSharp___children',
	ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
	ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
	ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
	ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
	ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
	ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
	ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
	ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
	ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
	ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
	ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
	ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
	ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
	ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
	ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
	ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
	ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
	ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
	ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
	ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
	ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
	ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
	ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
	ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
	ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
	ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
	ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
	ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
	ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
	ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
	ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
	ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
	ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
	ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
	ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
	ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
	ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
	ChildrenImageSharpId = 'childrenImageSharp___id',
	ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
	ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
	ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
	ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
	ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
	ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
	ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
	ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
	ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
	ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
	ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
	ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
	ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
	ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
	ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
	ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
	ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
	ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
	ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
	ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
	ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
	ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
	ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
	ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
	ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
	ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
	ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
	ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
	ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
	ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
	ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
	ChildrenMdx = 'childrenMdx',
	ChildrenMdxBody = 'childrenMdx___body',
	ChildrenMdxChildren = 'childrenMdx___children',
	ChildrenMdxChildrenChildren = 'childrenMdx___children___children',
	ChildrenMdxChildrenChildrenChildren = 'childrenMdx___children___children___children',
	ChildrenMdxChildrenChildrenId = 'childrenMdx___children___children___id',
	ChildrenMdxChildrenId = 'childrenMdx___children___id',
	ChildrenMdxChildrenInternalContent = 'childrenMdx___children___internal___content',
	ChildrenMdxChildrenInternalContentDigest = 'childrenMdx___children___internal___contentDigest',
	ChildrenMdxChildrenInternalDescription = 'childrenMdx___children___internal___description',
	ChildrenMdxChildrenInternalFieldOwners = 'childrenMdx___children___internal___fieldOwners',
	ChildrenMdxChildrenInternalIgnoreType = 'childrenMdx___children___internal___ignoreType',
	ChildrenMdxChildrenInternalMediaType = 'childrenMdx___children___internal___mediaType',
	ChildrenMdxChildrenInternalOwner = 'childrenMdx___children___internal___owner',
	ChildrenMdxChildrenInternalType = 'childrenMdx___children___internal___type',
	ChildrenMdxChildrenParentChildren = 'childrenMdx___children___parent___children',
	ChildrenMdxChildrenParentId = 'childrenMdx___children___parent___id',
	ChildrenMdxExcerpt = 'childrenMdx___excerpt',
	ChildrenMdxFileAbsolutePath = 'childrenMdx___fileAbsolutePath',
	ChildrenMdxFrontmatterAuthor = 'childrenMdx___frontmatter___author',
	ChildrenMdxFrontmatterDescription = 'childrenMdx___frontmatter___description',
	ChildrenMdxFrontmatterEmbeddedImagesLocal = 'childrenMdx___frontmatter___embeddedImagesLocal',
	ChildrenMdxFrontmatterEmbeddedImagesLocalAbsolutePath = 'childrenMdx___frontmatter___embeddedImagesLocal___absolutePath',
	ChildrenMdxFrontmatterEmbeddedImagesLocalAccessTime = 'childrenMdx___frontmatter___embeddedImagesLocal___accessTime',
	ChildrenMdxFrontmatterEmbeddedImagesLocalAtime = 'childrenMdx___frontmatter___embeddedImagesLocal___atime',
	ChildrenMdxFrontmatterEmbeddedImagesLocalAtimeMs = 'childrenMdx___frontmatter___embeddedImagesLocal___atimeMs',
	ChildrenMdxFrontmatterEmbeddedImagesLocalBase = 'childrenMdx___frontmatter___embeddedImagesLocal___base',
	ChildrenMdxFrontmatterEmbeddedImagesLocalBirthTime = 'childrenMdx___frontmatter___embeddedImagesLocal___birthTime',
	ChildrenMdxFrontmatterEmbeddedImagesLocalBirthtime = 'childrenMdx___frontmatter___embeddedImagesLocal___birthtime',
	ChildrenMdxFrontmatterEmbeddedImagesLocalBirthtimeMs = 'childrenMdx___frontmatter___embeddedImagesLocal___birthtimeMs',
	ChildrenMdxFrontmatterEmbeddedImagesLocalBlksize = 'childrenMdx___frontmatter___embeddedImagesLocal___blksize',
	ChildrenMdxFrontmatterEmbeddedImagesLocalBlocks = 'childrenMdx___frontmatter___embeddedImagesLocal___blocks',
	ChildrenMdxFrontmatterEmbeddedImagesLocalChangeTime = 'childrenMdx___frontmatter___embeddedImagesLocal___changeTime',
	ChildrenMdxFrontmatterEmbeddedImagesLocalChildren = 'childrenMdx___frontmatter___embeddedImagesLocal___children',
	ChildrenMdxFrontmatterEmbeddedImagesLocalChildrenImageSharp = 'childrenMdx___frontmatter___embeddedImagesLocal___childrenImageSharp',
	ChildrenMdxFrontmatterEmbeddedImagesLocalChildrenMdx = 'childrenMdx___frontmatter___embeddedImagesLocal___childrenMdx',
	ChildrenMdxFrontmatterEmbeddedImagesLocalCtime = 'childrenMdx___frontmatter___embeddedImagesLocal___ctime',
	ChildrenMdxFrontmatterEmbeddedImagesLocalCtimeMs = 'childrenMdx___frontmatter___embeddedImagesLocal___ctimeMs',
	ChildrenMdxFrontmatterEmbeddedImagesLocalDev = 'childrenMdx___frontmatter___embeddedImagesLocal___dev',
	ChildrenMdxFrontmatterEmbeddedImagesLocalDir = 'childrenMdx___frontmatter___embeddedImagesLocal___dir',
	ChildrenMdxFrontmatterEmbeddedImagesLocalExt = 'childrenMdx___frontmatter___embeddedImagesLocal___ext',
	ChildrenMdxFrontmatterEmbeddedImagesLocalExtension = 'childrenMdx___frontmatter___embeddedImagesLocal___extension',
	ChildrenMdxFrontmatterEmbeddedImagesLocalGid = 'childrenMdx___frontmatter___embeddedImagesLocal___gid',
	ChildrenMdxFrontmatterEmbeddedImagesLocalId = 'childrenMdx___frontmatter___embeddedImagesLocal___id',
	ChildrenMdxFrontmatterEmbeddedImagesLocalIno = 'childrenMdx___frontmatter___embeddedImagesLocal___ino',
	ChildrenMdxFrontmatterEmbeddedImagesLocalMode = 'childrenMdx___frontmatter___embeddedImagesLocal___mode',
	ChildrenMdxFrontmatterEmbeddedImagesLocalModifiedTime = 'childrenMdx___frontmatter___embeddedImagesLocal___modifiedTime',
	ChildrenMdxFrontmatterEmbeddedImagesLocalMtime = 'childrenMdx___frontmatter___embeddedImagesLocal___mtime',
	ChildrenMdxFrontmatterEmbeddedImagesLocalMtimeMs = 'childrenMdx___frontmatter___embeddedImagesLocal___mtimeMs',
	ChildrenMdxFrontmatterEmbeddedImagesLocalName = 'childrenMdx___frontmatter___embeddedImagesLocal___name',
	ChildrenMdxFrontmatterEmbeddedImagesLocalNlink = 'childrenMdx___frontmatter___embeddedImagesLocal___nlink',
	ChildrenMdxFrontmatterEmbeddedImagesLocalPrettySize = 'childrenMdx___frontmatter___embeddedImagesLocal___prettySize',
	ChildrenMdxFrontmatterEmbeddedImagesLocalPublicUrl = 'childrenMdx___frontmatter___embeddedImagesLocal___publicURL',
	ChildrenMdxFrontmatterEmbeddedImagesLocalRdev = 'childrenMdx___frontmatter___embeddedImagesLocal___rdev',
	ChildrenMdxFrontmatterEmbeddedImagesLocalRelativeDirectory = 'childrenMdx___frontmatter___embeddedImagesLocal___relativeDirectory',
	ChildrenMdxFrontmatterEmbeddedImagesLocalRelativePath = 'childrenMdx___frontmatter___embeddedImagesLocal___relativePath',
	ChildrenMdxFrontmatterEmbeddedImagesLocalRoot = 'childrenMdx___frontmatter___embeddedImagesLocal___root',
	ChildrenMdxFrontmatterEmbeddedImagesLocalSize = 'childrenMdx___frontmatter___embeddedImagesLocal___size',
	ChildrenMdxFrontmatterEmbeddedImagesLocalSourceInstanceName = 'childrenMdx___frontmatter___embeddedImagesLocal___sourceInstanceName',
	ChildrenMdxFrontmatterEmbeddedImagesLocalUid = 'childrenMdx___frontmatter___embeddedImagesLocal___uid',
	ChildrenMdxFrontmatterEmbeddedImagesLocalUrl = 'childrenMdx___frontmatter___embeddedImagesLocal___url',
	ChildrenMdxFrontmatterEmbeddedImagesRemote = 'childrenMdx___frontmatter___embeddedImagesRemote',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteAbsolutePath = 'childrenMdx___frontmatter___embeddedImagesRemote___absolutePath',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteAccessTime = 'childrenMdx___frontmatter___embeddedImagesRemote___accessTime',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteAtime = 'childrenMdx___frontmatter___embeddedImagesRemote___atime',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteAtimeMs = 'childrenMdx___frontmatter___embeddedImagesRemote___atimeMs',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteBase = 'childrenMdx___frontmatter___embeddedImagesRemote___base',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteBirthTime = 'childrenMdx___frontmatter___embeddedImagesRemote___birthTime',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteBirthtime = 'childrenMdx___frontmatter___embeddedImagesRemote___birthtime',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteBirthtimeMs = 'childrenMdx___frontmatter___embeddedImagesRemote___birthtimeMs',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteBlksize = 'childrenMdx___frontmatter___embeddedImagesRemote___blksize',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteBlocks = 'childrenMdx___frontmatter___embeddedImagesRemote___blocks',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteChangeTime = 'childrenMdx___frontmatter___embeddedImagesRemote___changeTime',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteChildren = 'childrenMdx___frontmatter___embeddedImagesRemote___children',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteChildrenImageSharp = 'childrenMdx___frontmatter___embeddedImagesRemote___childrenImageSharp',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteChildrenMdx = 'childrenMdx___frontmatter___embeddedImagesRemote___childrenMdx',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteCtime = 'childrenMdx___frontmatter___embeddedImagesRemote___ctime',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteCtimeMs = 'childrenMdx___frontmatter___embeddedImagesRemote___ctimeMs',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteDev = 'childrenMdx___frontmatter___embeddedImagesRemote___dev',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteDir = 'childrenMdx___frontmatter___embeddedImagesRemote___dir',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteExt = 'childrenMdx___frontmatter___embeddedImagesRemote___ext',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteExtension = 'childrenMdx___frontmatter___embeddedImagesRemote___extension',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteGid = 'childrenMdx___frontmatter___embeddedImagesRemote___gid',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteId = 'childrenMdx___frontmatter___embeddedImagesRemote___id',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteIno = 'childrenMdx___frontmatter___embeddedImagesRemote___ino',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteMode = 'childrenMdx___frontmatter___embeddedImagesRemote___mode',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteModifiedTime = 'childrenMdx___frontmatter___embeddedImagesRemote___modifiedTime',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteMtime = 'childrenMdx___frontmatter___embeddedImagesRemote___mtime',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteMtimeMs = 'childrenMdx___frontmatter___embeddedImagesRemote___mtimeMs',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteName = 'childrenMdx___frontmatter___embeddedImagesRemote___name',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteNlink = 'childrenMdx___frontmatter___embeddedImagesRemote___nlink',
	ChildrenMdxFrontmatterEmbeddedImagesRemotePrettySize = 'childrenMdx___frontmatter___embeddedImagesRemote___prettySize',
	ChildrenMdxFrontmatterEmbeddedImagesRemotePublicUrl = 'childrenMdx___frontmatter___embeddedImagesRemote___publicURL',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteRdev = 'childrenMdx___frontmatter___embeddedImagesRemote___rdev',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteRelativeDirectory = 'childrenMdx___frontmatter___embeddedImagesRemote___relativeDirectory',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteRelativePath = 'childrenMdx___frontmatter___embeddedImagesRemote___relativePath',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteRoot = 'childrenMdx___frontmatter___embeddedImagesRemote___root',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteSize = 'childrenMdx___frontmatter___embeddedImagesRemote___size',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteSourceInstanceName = 'childrenMdx___frontmatter___embeddedImagesRemote___sourceInstanceName',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteUid = 'childrenMdx___frontmatter___embeddedImagesRemote___uid',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteUrl = 'childrenMdx___frontmatter___embeddedImagesRemote___url',
	ChildrenMdxFrontmatterFeatured = 'childrenMdx___frontmatter___featured',
	ChildrenMdxFrontmatterFeaturedImageAbsolutePath = 'childrenMdx___frontmatter___featuredImage___absolutePath',
	ChildrenMdxFrontmatterFeaturedImageAccessTime = 'childrenMdx___frontmatter___featuredImage___accessTime',
	ChildrenMdxFrontmatterFeaturedImageAtime = 'childrenMdx___frontmatter___featuredImage___atime',
	ChildrenMdxFrontmatterFeaturedImageAtimeMs = 'childrenMdx___frontmatter___featuredImage___atimeMs',
	ChildrenMdxFrontmatterFeaturedImageBase = 'childrenMdx___frontmatter___featuredImage___base',
	ChildrenMdxFrontmatterFeaturedImageBirthTime = 'childrenMdx___frontmatter___featuredImage___birthTime',
	ChildrenMdxFrontmatterFeaturedImageBirthtime = 'childrenMdx___frontmatter___featuredImage___birthtime',
	ChildrenMdxFrontmatterFeaturedImageBirthtimeMs = 'childrenMdx___frontmatter___featuredImage___birthtimeMs',
	ChildrenMdxFrontmatterFeaturedImageBlksize = 'childrenMdx___frontmatter___featuredImage___blksize',
	ChildrenMdxFrontmatterFeaturedImageBlocks = 'childrenMdx___frontmatter___featuredImage___blocks',
	ChildrenMdxFrontmatterFeaturedImageChangeTime = 'childrenMdx___frontmatter___featuredImage___changeTime',
	ChildrenMdxFrontmatterFeaturedImageChildren = 'childrenMdx___frontmatter___featuredImage___children',
	ChildrenMdxFrontmatterFeaturedImageChildrenImageSharp = 'childrenMdx___frontmatter___featuredImage___childrenImageSharp',
	ChildrenMdxFrontmatterFeaturedImageChildrenMdx = 'childrenMdx___frontmatter___featuredImage___childrenMdx',
	ChildrenMdxFrontmatterFeaturedImageCtime = 'childrenMdx___frontmatter___featuredImage___ctime',
	ChildrenMdxFrontmatterFeaturedImageCtimeMs = 'childrenMdx___frontmatter___featuredImage___ctimeMs',
	ChildrenMdxFrontmatterFeaturedImageDev = 'childrenMdx___frontmatter___featuredImage___dev',
	ChildrenMdxFrontmatterFeaturedImageDir = 'childrenMdx___frontmatter___featuredImage___dir',
	ChildrenMdxFrontmatterFeaturedImageExt = 'childrenMdx___frontmatter___featuredImage___ext',
	ChildrenMdxFrontmatterFeaturedImageExtension = 'childrenMdx___frontmatter___featuredImage___extension',
	ChildrenMdxFrontmatterFeaturedImageGid = 'childrenMdx___frontmatter___featuredImage___gid',
	ChildrenMdxFrontmatterFeaturedImageId = 'childrenMdx___frontmatter___featuredImage___id',
	ChildrenMdxFrontmatterFeaturedImageIno = 'childrenMdx___frontmatter___featuredImage___ino',
	ChildrenMdxFrontmatterFeaturedImageMode = 'childrenMdx___frontmatter___featuredImage___mode',
	ChildrenMdxFrontmatterFeaturedImageModifiedTime = 'childrenMdx___frontmatter___featuredImage___modifiedTime',
	ChildrenMdxFrontmatterFeaturedImageMtime = 'childrenMdx___frontmatter___featuredImage___mtime',
	ChildrenMdxFrontmatterFeaturedImageMtimeMs = 'childrenMdx___frontmatter___featuredImage___mtimeMs',
	ChildrenMdxFrontmatterFeaturedImageName = 'childrenMdx___frontmatter___featuredImage___name',
	ChildrenMdxFrontmatterFeaturedImageNlink = 'childrenMdx___frontmatter___featuredImage___nlink',
	ChildrenMdxFrontmatterFeaturedImagePrettySize = 'childrenMdx___frontmatter___featuredImage___prettySize',
	ChildrenMdxFrontmatterFeaturedImagePublicUrl = 'childrenMdx___frontmatter___featuredImage___publicURL',
	ChildrenMdxFrontmatterFeaturedImageRdev = 'childrenMdx___frontmatter___featuredImage___rdev',
	ChildrenMdxFrontmatterFeaturedImageRelativeDirectory = 'childrenMdx___frontmatter___featuredImage___relativeDirectory',
	ChildrenMdxFrontmatterFeaturedImageRelativePath = 'childrenMdx___frontmatter___featuredImage___relativePath',
	ChildrenMdxFrontmatterFeaturedImageRoot = 'childrenMdx___frontmatter___featuredImage___root',
	ChildrenMdxFrontmatterFeaturedImageSize = 'childrenMdx___frontmatter___featuredImage___size',
	ChildrenMdxFrontmatterFeaturedImageSourceInstanceName = 'childrenMdx___frontmatter___featuredImage___sourceInstanceName',
	ChildrenMdxFrontmatterFeaturedImageUid = 'childrenMdx___frontmatter___featuredImage___uid',
	ChildrenMdxFrontmatterFeaturedImageUrl = 'childrenMdx___frontmatter___featuredImage___url',
	ChildrenMdxFrontmatterPublished = 'childrenMdx___frontmatter___published',
	ChildrenMdxFrontmatterTitle = 'childrenMdx___frontmatter___title',
	ChildrenMdxFrontmatterUpdated = 'childrenMdx___frontmatter___updated',
	ChildrenMdxGatsbyPath = 'childrenMdx___gatsbyPath',
	ChildrenMdxHeadings = 'childrenMdx___headings',
	ChildrenMdxHeadingsDepth = 'childrenMdx___headings___depth',
	ChildrenMdxHeadingsValue = 'childrenMdx___headings___value',
	ChildrenMdxHtml = 'childrenMdx___html',
	ChildrenMdxId = 'childrenMdx___id',
	ChildrenMdxInternalContent = 'childrenMdx___internal___content',
	ChildrenMdxInternalContentDigest = 'childrenMdx___internal___contentDigest',
	ChildrenMdxInternalDescription = 'childrenMdx___internal___description',
	ChildrenMdxInternalFieldOwners = 'childrenMdx___internal___fieldOwners',
	ChildrenMdxInternalIgnoreType = 'childrenMdx___internal___ignoreType',
	ChildrenMdxInternalMediaType = 'childrenMdx___internal___mediaType',
	ChildrenMdxInternalOwner = 'childrenMdx___internal___owner',
	ChildrenMdxInternalType = 'childrenMdx___internal___type',
	ChildrenMdxMdxAst = 'childrenMdx___mdxAST',
	ChildrenMdxParentChildren = 'childrenMdx___parent___children',
	ChildrenMdxParentChildrenChildren = 'childrenMdx___parent___children___children',
	ChildrenMdxParentChildrenId = 'childrenMdx___parent___children___id',
	ChildrenMdxParentId = 'childrenMdx___parent___id',
	ChildrenMdxParentInternalContent = 'childrenMdx___parent___internal___content',
	ChildrenMdxParentInternalContentDigest = 'childrenMdx___parent___internal___contentDigest',
	ChildrenMdxParentInternalDescription = 'childrenMdx___parent___internal___description',
	ChildrenMdxParentInternalFieldOwners = 'childrenMdx___parent___internal___fieldOwners',
	ChildrenMdxParentInternalIgnoreType = 'childrenMdx___parent___internal___ignoreType',
	ChildrenMdxParentInternalMediaType = 'childrenMdx___parent___internal___mediaType',
	ChildrenMdxParentInternalOwner = 'childrenMdx___parent___internal___owner',
	ChildrenMdxParentInternalType = 'childrenMdx___parent___internal___type',
	ChildrenMdxParentParentChildren = 'childrenMdx___parent___parent___children',
	ChildrenMdxParentParentId = 'childrenMdx___parent___parent___id',
	ChildrenMdxRawBody = 'childrenMdx___rawBody',
	ChildrenMdxSlug = 'childrenMdx___slug',
	ChildrenMdxTableOfContents = 'childrenMdx___tableOfContents',
	ChildrenMdxTimeToRead = 'childrenMdx___timeToRead',
	ChildrenMdxWordCountParagraphs = 'childrenMdx___wordCount___paragraphs',
	ChildrenMdxWordCountSentences = 'childrenMdx___wordCount___sentences',
	ChildrenMdxWordCountWords = 'childrenMdx___wordCount___words',
	ChildrenChildren = 'children___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenId = 'children___id',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentParentId = 'children___parent___parent___id',
	Ctime = 'ctime',
	CtimeMs = 'ctimeMs',
	Dev = 'dev',
	Dir = 'dir',
	Ext = 'ext',
	Extension = 'extension',
	Gid = 'gid',
	Id = 'id',
	Ino = 'ino',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	Mode = 'mode',
	ModifiedTime = 'modifiedTime',
	Mtime = 'mtime',
	MtimeMs = 'mtimeMs',
	Name = 'name',
	Nlink = 'nlink',
	ParentChildren = 'parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentId = 'parent___id',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentId = 'parent___parent___id',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentParentId = 'parent___parent___parent___id',
	PrettySize = 'prettySize',
	PublicUrl = 'publicURL',
	Rdev = 'rdev',
	RelativeDirectory = 'relativeDirectory',
	RelativePath = 'relativePath',
	Root = 'root',
	Size = 'size',
	SourceInstanceName = 'sourceInstanceName',
	Uid = 'uid',
	Url = 'url',
}

export type FileFilterInput = {
	absolutePath?: Maybe<StringQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	blksize?: Maybe<IntQueryOperatorInput>
	blocks?: Maybe<IntQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	childImageSharp?: Maybe<ImageSharpFilterInput>
	childMdx?: Maybe<MdxFilterInput>
	children?: Maybe<NodeFilterListInput>
	childrenImageSharp?: Maybe<ImageSharpFilterListInput>
	childrenMdx?: Maybe<MdxFilterListInput>
	ctime?: Maybe<DateQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	mode?: Maybe<IntQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	publicURL?: Maybe<StringQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
}

export type FileFilterListInput = {
	elemMatch?: Maybe<FileFilterInput>
}

export type FileGroupConnection = {
	__typename?: 'FileGroupConnection'
	distinct: Array<Scalars['String']>
	edges: Array<FileEdge>
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
	group: Array<FileGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<File>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type FileGroupConnectionDistinctArgs = {
	field: FileFieldsEnum
}

export type FileGroupConnectionGroupArgs = {
	field: FileFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type FileGroupConnectionMaxArgs = {
	field: FileFieldsEnum
}

export type FileGroupConnectionMinArgs = {
	field: FileFieldsEnum
}

export type FileGroupConnectionSumArgs = {
	field: FileFieldsEnum
}

export type FileSortInput = {
	fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
	eq?: Maybe<Scalars['Float']>
	gt?: Maybe<Scalars['Float']>
	gte?: Maybe<Scalars['Float']>
	in?: Maybe<Array<Maybe<Scalars['Float']>>>
	lt?: Maybe<Scalars['Float']>
	lte?: Maybe<Scalars['Float']>
	ne?: Maybe<Scalars['Float']>
	nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export type Frontmatter = {
	__typename?: 'Frontmatter'
	author?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	embeddedImagesLocal?: Maybe<Array<Maybe<File>>>
	embeddedImagesRemote?: Maybe<Array<Maybe<File>>>
	featured?: Maybe<Scalars['Boolean']>
	featuredImage?: Maybe<File>
	published?: Maybe<Scalars['Date']>
	title?: Maybe<Scalars['String']>
	updated?: Maybe<Scalars['Date']>
}

export type FrontmatterPublishedArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type FrontmatterUpdatedArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type FrontmatterFilterInput = {
	author?: Maybe<StringQueryOperatorInput>
	description?: Maybe<StringQueryOperatorInput>
	embeddedImagesLocal?: Maybe<FileFilterListInput>
	embeddedImagesRemote?: Maybe<FileFilterListInput>
	featured?: Maybe<BooleanQueryOperatorInput>
	featuredImage?: Maybe<FileFilterInput>
	published?: Maybe<DateQueryOperatorInput>
	title?: Maybe<StringQueryOperatorInput>
	updated?: Maybe<DateQueryOperatorInput>
}

export enum HeadingsMdx {
	H1 = 'h1',
	H2 = 'h2',
	H3 = 'h3',
	H4 = 'h4',
	H5 = 'h5',
	H6 = 'h6',
}

export enum ImageCropFocus {
	Attention = 'ATTENTION',
	Center = 'CENTER',
	East = 'EAST',
	Entropy = 'ENTROPY',
	North = 'NORTH',
	Northeast = 'NORTHEAST',
	Northwest = 'NORTHWEST',
	South = 'SOUTH',
	Southeast = 'SOUTHEAST',
	Southwest = 'SOUTHWEST',
	West = 'WEST',
}

export enum ImageFit {
	Contain = 'CONTAIN',
	Cover = 'COVER',
	Fill = 'FILL',
	Inside = 'INSIDE',
	Outside = 'OUTSIDE',
}

export enum ImageFormat {
	Auto = 'AUTO',
	Avif = 'AVIF',
	Jpg = 'JPG',
	NoChange = 'NO_CHANGE',
	Png = 'PNG',
	Webp = 'WEBP',
}

export enum ImageLayout {
	Constrained = 'CONSTRAINED',
	Fixed = 'FIXED',
	FullWidth = 'FULL_WIDTH',
}

export enum ImagePlaceholder {
	Blurred = 'BLURRED',
	DominantColor = 'DOMINANT_COLOR',
	None = 'NONE',
	TracedSvg = 'TRACED_SVG',
}

export type ImageSharp = Node & {
	__typename?: 'ImageSharp'
	children: Array<Node>
	fixed?: Maybe<ImageSharpFixed>
	fluid?: Maybe<ImageSharpFluid>
	gatsbyImageData: Scalars['JSON']
	id: Scalars['ID']
	internal: Internal
	original?: Maybe<ImageSharpOriginal>
	parent?: Maybe<Node>
	resize?: Maybe<ImageSharpResize>
}

export type ImageSharpFixedArgs = {
	background?: Maybe<Scalars['String']>
	base64Width?: Maybe<Scalars['Int']>
	cropFocus?: Maybe<ImageCropFocus>
	duotone?: Maybe<DuotoneGradient>
	fit?: Maybe<ImageFit>
	grayscale?: Maybe<Scalars['Boolean']>
	height?: Maybe<Scalars['Int']>
	jpegProgressive?: Maybe<Scalars['Boolean']>
	jpegQuality?: Maybe<Scalars['Int']>
	pngCompressionSpeed?: Maybe<Scalars['Int']>
	pngQuality?: Maybe<Scalars['Int']>
	quality?: Maybe<Scalars['Int']>
	rotate?: Maybe<Scalars['Int']>
	toFormat?: Maybe<ImageFormat>
	toFormatBase64?: Maybe<ImageFormat>
	traceSVG?: Maybe<Potrace>
	trim?: Maybe<Scalars['Float']>
	webpQuality?: Maybe<Scalars['Int']>
	width?: Maybe<Scalars['Int']>
}

export type ImageSharpFluidArgs = {
	background?: Maybe<Scalars['String']>
	base64Width?: Maybe<Scalars['Int']>
	cropFocus?: Maybe<ImageCropFocus>
	duotone?: Maybe<DuotoneGradient>
	fit?: Maybe<ImageFit>
	grayscale?: Maybe<Scalars['Boolean']>
	jpegProgressive?: Maybe<Scalars['Boolean']>
	jpegQuality?: Maybe<Scalars['Int']>
	maxHeight?: Maybe<Scalars['Int']>
	maxWidth?: Maybe<Scalars['Int']>
	pngCompressionSpeed?: Maybe<Scalars['Int']>
	pngQuality?: Maybe<Scalars['Int']>
	quality?: Maybe<Scalars['Int']>
	rotate?: Maybe<Scalars['Int']>
	sizes?: Maybe<Scalars['String']>
	srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
	toFormat?: Maybe<ImageFormat>
	toFormatBase64?: Maybe<ImageFormat>
	traceSVG?: Maybe<Potrace>
	trim?: Maybe<Scalars['Float']>
	webpQuality?: Maybe<Scalars['Int']>
}

export type ImageSharpGatsbyImageDataArgs = {
	aspectRatio?: Maybe<Scalars['Float']>
	avifOptions?: Maybe<AvifOptions>
	backgroundColor?: Maybe<Scalars['String']>
	blurredOptions?: Maybe<BlurredOptions>
	breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
	formats?: Maybe<Array<Maybe<ImageFormat>>>
	height?: Maybe<Scalars['Int']>
	jpgOptions?: Maybe<JpgOptions>
	layout?: Maybe<ImageLayout>
	outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
	placeholder?: Maybe<ImagePlaceholder>
	pngOptions?: Maybe<PngOptions>
	quality?: Maybe<Scalars['Int']>
	sizes?: Maybe<Scalars['String']>
	tracedSVGOptions?: Maybe<Potrace>
	transformOptions?: Maybe<TransformOptions>
	webpOptions?: Maybe<WebPOptions>
	width?: Maybe<Scalars['Int']>
}

export type ImageSharpResizeArgs = {
	background?: Maybe<Scalars['String']>
	base64?: Maybe<Scalars['Boolean']>
	cropFocus?: Maybe<ImageCropFocus>
	duotone?: Maybe<DuotoneGradient>
	fit?: Maybe<ImageFit>
	grayscale?: Maybe<Scalars['Boolean']>
	height?: Maybe<Scalars['Int']>
	jpegProgressive?: Maybe<Scalars['Boolean']>
	jpegQuality?: Maybe<Scalars['Int']>
	pngCompressionLevel?: Maybe<Scalars['Int']>
	pngCompressionSpeed?: Maybe<Scalars['Int']>
	pngQuality?: Maybe<Scalars['Int']>
	quality?: Maybe<Scalars['Int']>
	rotate?: Maybe<Scalars['Int']>
	toFormat?: Maybe<ImageFormat>
	traceSVG?: Maybe<Potrace>
	trim?: Maybe<Scalars['Float']>
	webpQuality?: Maybe<Scalars['Int']>
	width?: Maybe<Scalars['Int']>
}

export type ImageSharpConnection = {
	__typename?: 'ImageSharpConnection'
	distinct: Array<Scalars['String']>
	edges: Array<ImageSharpEdge>
	group: Array<ImageSharpGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<ImageSharp>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type ImageSharpConnectionDistinctArgs = {
	field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
	field: ImageSharpFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type ImageSharpConnectionMaxArgs = {
	field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionMinArgs = {
	field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionSumArgs = {
	field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
	__typename?: 'ImageSharpEdge'
	next?: Maybe<ImageSharp>
	node: ImageSharp
	previous?: Maybe<ImageSharp>
}

export enum ImageSharpFieldsEnum {
	Children = 'children',
	ChildrenChildren = 'children___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenId = 'children___id',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentParentId = 'children___parent___parent___id',
	FixedAspectRatio = 'fixed___aspectRatio',
	FixedBase64 = 'fixed___base64',
	FixedHeight = 'fixed___height',
	FixedOriginalName = 'fixed___originalName',
	FixedSrc = 'fixed___src',
	FixedSrcSet = 'fixed___srcSet',
	FixedSrcSetWebp = 'fixed___srcSetWebp',
	FixedSrcWebp = 'fixed___srcWebp',
	FixedTracedSvg = 'fixed___tracedSVG',
	FixedWidth = 'fixed___width',
	FluidAspectRatio = 'fluid___aspectRatio',
	FluidBase64 = 'fluid___base64',
	FluidOriginalImg = 'fluid___originalImg',
	FluidOriginalName = 'fluid___originalName',
	FluidPresentationHeight = 'fluid___presentationHeight',
	FluidPresentationWidth = 'fluid___presentationWidth',
	FluidSizes = 'fluid___sizes',
	FluidSrc = 'fluid___src',
	FluidSrcSet = 'fluid___srcSet',
	FluidSrcSetWebp = 'fluid___srcSetWebp',
	FluidSrcWebp = 'fluid___srcWebp',
	FluidTracedSvg = 'fluid___tracedSVG',
	GatsbyImageData = 'gatsbyImageData',
	Id = 'id',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	OriginalHeight = 'original___height',
	OriginalSrc = 'original___src',
	OriginalWidth = 'original___width',
	ParentChildren = 'parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentId = 'parent___id',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentId = 'parent___parent___id',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentParentId = 'parent___parent___parent___id',
	ResizeAspectRatio = 'resize___aspectRatio',
	ResizeHeight = 'resize___height',
	ResizeOriginalName = 'resize___originalName',
	ResizeSrc = 'resize___src',
	ResizeTracedSvg = 'resize___tracedSVG',
	ResizeWidth = 'resize___width',
}

export type ImageSharpFilterInput = {
	children?: Maybe<NodeFilterListInput>
	fixed?: Maybe<ImageSharpFixedFilterInput>
	fluid?: Maybe<ImageSharpFluidFilterInput>
	gatsbyImageData?: Maybe<JsonQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	original?: Maybe<ImageSharpOriginalFilterInput>
	parent?: Maybe<NodeFilterInput>
	resize?: Maybe<ImageSharpResizeFilterInput>
}

export type ImageSharpFilterListInput = {
	elemMatch?: Maybe<ImageSharpFilterInput>
}

export type ImageSharpFixed = {
	__typename?: 'ImageSharpFixed'
	aspectRatio?: Maybe<Scalars['Float']>
	base64?: Maybe<Scalars['String']>
	height: Scalars['Float']
	originalName?: Maybe<Scalars['String']>
	src: Scalars['String']
	srcSet: Scalars['String']
	srcSetWebp?: Maybe<Scalars['String']>
	srcWebp?: Maybe<Scalars['String']>
	tracedSVG?: Maybe<Scalars['String']>
	width: Scalars['Float']
}

export type ImageSharpFixedFilterInput = {
	aspectRatio?: Maybe<FloatQueryOperatorInput>
	base64?: Maybe<StringQueryOperatorInput>
	height?: Maybe<FloatQueryOperatorInput>
	originalName?: Maybe<StringQueryOperatorInput>
	src?: Maybe<StringQueryOperatorInput>
	srcSet?: Maybe<StringQueryOperatorInput>
	srcSetWebp?: Maybe<StringQueryOperatorInput>
	srcWebp?: Maybe<StringQueryOperatorInput>
	tracedSVG?: Maybe<StringQueryOperatorInput>
	width?: Maybe<FloatQueryOperatorInput>
}

export type ImageSharpFluid = {
	__typename?: 'ImageSharpFluid'
	aspectRatio: Scalars['Float']
	base64?: Maybe<Scalars['String']>
	originalImg?: Maybe<Scalars['String']>
	originalName?: Maybe<Scalars['String']>
	presentationHeight: Scalars['Int']
	presentationWidth: Scalars['Int']
	sizes: Scalars['String']
	src: Scalars['String']
	srcSet: Scalars['String']
	srcSetWebp?: Maybe<Scalars['String']>
	srcWebp?: Maybe<Scalars['String']>
	tracedSVG?: Maybe<Scalars['String']>
}

export type ImageSharpFluidFilterInput = {
	aspectRatio?: Maybe<FloatQueryOperatorInput>
	base64?: Maybe<StringQueryOperatorInput>
	originalImg?: Maybe<StringQueryOperatorInput>
	originalName?: Maybe<StringQueryOperatorInput>
	presentationHeight?: Maybe<IntQueryOperatorInput>
	presentationWidth?: Maybe<IntQueryOperatorInput>
	sizes?: Maybe<StringQueryOperatorInput>
	src?: Maybe<StringQueryOperatorInput>
	srcSet?: Maybe<StringQueryOperatorInput>
	srcSetWebp?: Maybe<StringQueryOperatorInput>
	srcWebp?: Maybe<StringQueryOperatorInput>
	tracedSVG?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpGroupConnection = {
	__typename?: 'ImageSharpGroupConnection'
	distinct: Array<Scalars['String']>
	edges: Array<ImageSharpEdge>
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
	group: Array<ImageSharpGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<ImageSharp>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type ImageSharpGroupConnectionDistinctArgs = {
	field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionGroupArgs = {
	field: ImageSharpFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type ImageSharpGroupConnectionMaxArgs = {
	field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionMinArgs = {
	field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionSumArgs = {
	field: ImageSharpFieldsEnum
}

export type ImageSharpOriginal = {
	__typename?: 'ImageSharpOriginal'
	height?: Maybe<Scalars['Float']>
	src?: Maybe<Scalars['String']>
	width?: Maybe<Scalars['Float']>
}

export type ImageSharpOriginalFilterInput = {
	height?: Maybe<FloatQueryOperatorInput>
	src?: Maybe<StringQueryOperatorInput>
	width?: Maybe<FloatQueryOperatorInput>
}

export type ImageSharpResize = {
	__typename?: 'ImageSharpResize'
	aspectRatio?: Maybe<Scalars['Float']>
	height?: Maybe<Scalars['Int']>
	originalName?: Maybe<Scalars['String']>
	src?: Maybe<Scalars['String']>
	tracedSVG?: Maybe<Scalars['String']>
	width?: Maybe<Scalars['Int']>
}

export type ImageSharpResizeFilterInput = {
	aspectRatio?: Maybe<FloatQueryOperatorInput>
	height?: Maybe<IntQueryOperatorInput>
	originalName?: Maybe<StringQueryOperatorInput>
	src?: Maybe<StringQueryOperatorInput>
	tracedSVG?: Maybe<StringQueryOperatorInput>
	width?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpSortInput = {
	fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type IntQueryOperatorInput = {
	eq?: Maybe<Scalars['Int']>
	gt?: Maybe<Scalars['Int']>
	gte?: Maybe<Scalars['Int']>
	in?: Maybe<Array<Maybe<Scalars['Int']>>>
	lt?: Maybe<Scalars['Int']>
	lte?: Maybe<Scalars['Int']>
	ne?: Maybe<Scalars['Int']>
	nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type Internal = {
	__typename?: 'Internal'
	content?: Maybe<Scalars['String']>
	contentDigest: Scalars['String']
	description?: Maybe<Scalars['String']>
	fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
	ignoreType?: Maybe<Scalars['Boolean']>
	mediaType?: Maybe<Scalars['String']>
	owner: Scalars['String']
	type: Scalars['String']
}

export type InternalFilterInput = {
	content?: Maybe<StringQueryOperatorInput>
	contentDigest?: Maybe<StringQueryOperatorInput>
	description?: Maybe<StringQueryOperatorInput>
	fieldOwners?: Maybe<StringQueryOperatorInput>
	ignoreType?: Maybe<BooleanQueryOperatorInput>
	mediaType?: Maybe<StringQueryOperatorInput>
	owner?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
}

export type JpgOptions = {
	progressive?: Maybe<Scalars['Boolean']>
	quality?: Maybe<Scalars['Int']>
}

export type JsonQueryOperatorInput = {
	eq?: Maybe<Scalars['JSON']>
	glob?: Maybe<Scalars['JSON']>
	in?: Maybe<Array<Maybe<Scalars['JSON']>>>
	ne?: Maybe<Scalars['JSON']>
	nin?: Maybe<Array<Maybe<Scalars['JSON']>>>
	regex?: Maybe<Scalars['JSON']>
}

export type Mdx = Node & {
	__typename?: 'Mdx'
	body: Scalars['String']
	children: Array<Node>
	excerpt: Scalars['String']
	fileAbsolutePath: Scalars['String']
	frontmatter?: Maybe<Frontmatter>
	gatsbyPath?: Maybe<Scalars['String']>
	headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>
	html?: Maybe<Scalars['String']>
	id: Scalars['ID']
	internal: Internal
	mdxAST?: Maybe<Scalars['JSON']>
	parent?: Maybe<Node>
	rawBody: Scalars['String']
	slug?: Maybe<Scalars['String']>
	tableOfContents?: Maybe<Scalars['JSON']>
	timeToRead?: Maybe<Scalars['Int']>
	wordCount?: Maybe<MdxWordCount>
}

export type MdxExcerptArgs = {
	pruneLength?: Maybe<Scalars['Int']>
	truncate?: Maybe<Scalars['Boolean']>
}

export type MdxGatsbyPathArgs = {
	filePath?: Maybe<Scalars['String']>
}

export type MdxHeadingsArgs = {
	depth?: Maybe<HeadingsMdx>
}

export type MdxTableOfContentsArgs = {
	maxDepth?: Maybe<Scalars['Int']>
}

export type MdxConnection = {
	__typename?: 'MdxConnection'
	distinct: Array<Scalars['String']>
	edges: Array<MdxEdge>
	group: Array<MdxGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<Mdx>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type MdxConnectionDistinctArgs = {
	field: MdxFieldsEnum
}

export type MdxConnectionGroupArgs = {
	field: MdxFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type MdxConnectionMaxArgs = {
	field: MdxFieldsEnum
}

export type MdxConnectionMinArgs = {
	field: MdxFieldsEnum
}

export type MdxConnectionSumArgs = {
	field: MdxFieldsEnum
}

export type MdxEdge = {
	__typename?: 'MdxEdge'
	next?: Maybe<Mdx>
	node: Mdx
	previous?: Maybe<Mdx>
}

export enum MdxFieldsEnum {
	Body = 'body',
	Children = 'children',
	ChildrenChildren = 'children___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenId = 'children___id',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentParentId = 'children___parent___parent___id',
	Excerpt = 'excerpt',
	FileAbsolutePath = 'fileAbsolutePath',
	FrontmatterAuthor = 'frontmatter___author',
	FrontmatterDescription = 'frontmatter___description',
	FrontmatterEmbeddedImagesLocal = 'frontmatter___embeddedImagesLocal',
	FrontmatterEmbeddedImagesLocalAbsolutePath = 'frontmatter___embeddedImagesLocal___absolutePath',
	FrontmatterEmbeddedImagesLocalAccessTime = 'frontmatter___embeddedImagesLocal___accessTime',
	FrontmatterEmbeddedImagesLocalAtime = 'frontmatter___embeddedImagesLocal___atime',
	FrontmatterEmbeddedImagesLocalAtimeMs = 'frontmatter___embeddedImagesLocal___atimeMs',
	FrontmatterEmbeddedImagesLocalBase = 'frontmatter___embeddedImagesLocal___base',
	FrontmatterEmbeddedImagesLocalBirthTime = 'frontmatter___embeddedImagesLocal___birthTime',
	FrontmatterEmbeddedImagesLocalBirthtime = 'frontmatter___embeddedImagesLocal___birthtime',
	FrontmatterEmbeddedImagesLocalBirthtimeMs = 'frontmatter___embeddedImagesLocal___birthtimeMs',
	FrontmatterEmbeddedImagesLocalBlksize = 'frontmatter___embeddedImagesLocal___blksize',
	FrontmatterEmbeddedImagesLocalBlocks = 'frontmatter___embeddedImagesLocal___blocks',
	FrontmatterEmbeddedImagesLocalChangeTime = 'frontmatter___embeddedImagesLocal___changeTime',
	FrontmatterEmbeddedImagesLocalChildImageSharpChildren = 'frontmatter___embeddedImagesLocal___childImageSharp___children',
	FrontmatterEmbeddedImagesLocalChildImageSharpGatsbyImageData = 'frontmatter___embeddedImagesLocal___childImageSharp___gatsbyImageData',
	FrontmatterEmbeddedImagesLocalChildImageSharpId = 'frontmatter___embeddedImagesLocal___childImageSharp___id',
	FrontmatterEmbeddedImagesLocalChildMdxBody = 'frontmatter___embeddedImagesLocal___childMdx___body',
	FrontmatterEmbeddedImagesLocalChildMdxChildren = 'frontmatter___embeddedImagesLocal___childMdx___children',
	FrontmatterEmbeddedImagesLocalChildMdxExcerpt = 'frontmatter___embeddedImagesLocal___childMdx___excerpt',
	FrontmatterEmbeddedImagesLocalChildMdxFileAbsolutePath = 'frontmatter___embeddedImagesLocal___childMdx___fileAbsolutePath',
	FrontmatterEmbeddedImagesLocalChildMdxGatsbyPath = 'frontmatter___embeddedImagesLocal___childMdx___gatsbyPath',
	FrontmatterEmbeddedImagesLocalChildMdxHeadings = 'frontmatter___embeddedImagesLocal___childMdx___headings',
	FrontmatterEmbeddedImagesLocalChildMdxHtml = 'frontmatter___embeddedImagesLocal___childMdx___html',
	FrontmatterEmbeddedImagesLocalChildMdxId = 'frontmatter___embeddedImagesLocal___childMdx___id',
	FrontmatterEmbeddedImagesLocalChildMdxMdxAst = 'frontmatter___embeddedImagesLocal___childMdx___mdxAST',
	FrontmatterEmbeddedImagesLocalChildMdxRawBody = 'frontmatter___embeddedImagesLocal___childMdx___rawBody',
	FrontmatterEmbeddedImagesLocalChildMdxSlug = 'frontmatter___embeddedImagesLocal___childMdx___slug',
	FrontmatterEmbeddedImagesLocalChildMdxTableOfContents = 'frontmatter___embeddedImagesLocal___childMdx___tableOfContents',
	FrontmatterEmbeddedImagesLocalChildMdxTimeToRead = 'frontmatter___embeddedImagesLocal___childMdx___timeToRead',
	FrontmatterEmbeddedImagesLocalChildren = 'frontmatter___embeddedImagesLocal___children',
	FrontmatterEmbeddedImagesLocalChildrenImageSharp = 'frontmatter___embeddedImagesLocal___childrenImageSharp',
	FrontmatterEmbeddedImagesLocalChildrenImageSharpChildren = 'frontmatter___embeddedImagesLocal___childrenImageSharp___children',
	FrontmatterEmbeddedImagesLocalChildrenImageSharpGatsbyImageData = 'frontmatter___embeddedImagesLocal___childrenImageSharp___gatsbyImageData',
	FrontmatterEmbeddedImagesLocalChildrenImageSharpId = 'frontmatter___embeddedImagesLocal___childrenImageSharp___id',
	FrontmatterEmbeddedImagesLocalChildrenMdx = 'frontmatter___embeddedImagesLocal___childrenMdx',
	FrontmatterEmbeddedImagesLocalChildrenMdxBody = 'frontmatter___embeddedImagesLocal___childrenMdx___body',
	FrontmatterEmbeddedImagesLocalChildrenMdxChildren = 'frontmatter___embeddedImagesLocal___childrenMdx___children',
	FrontmatterEmbeddedImagesLocalChildrenMdxExcerpt = 'frontmatter___embeddedImagesLocal___childrenMdx___excerpt',
	FrontmatterEmbeddedImagesLocalChildrenMdxFileAbsolutePath = 'frontmatter___embeddedImagesLocal___childrenMdx___fileAbsolutePath',
	FrontmatterEmbeddedImagesLocalChildrenMdxGatsbyPath = 'frontmatter___embeddedImagesLocal___childrenMdx___gatsbyPath',
	FrontmatterEmbeddedImagesLocalChildrenMdxHeadings = 'frontmatter___embeddedImagesLocal___childrenMdx___headings',
	FrontmatterEmbeddedImagesLocalChildrenMdxHtml = 'frontmatter___embeddedImagesLocal___childrenMdx___html',
	FrontmatterEmbeddedImagesLocalChildrenMdxId = 'frontmatter___embeddedImagesLocal___childrenMdx___id',
	FrontmatterEmbeddedImagesLocalChildrenMdxMdxAst = 'frontmatter___embeddedImagesLocal___childrenMdx___mdxAST',
	FrontmatterEmbeddedImagesLocalChildrenMdxRawBody = 'frontmatter___embeddedImagesLocal___childrenMdx___rawBody',
	FrontmatterEmbeddedImagesLocalChildrenMdxSlug = 'frontmatter___embeddedImagesLocal___childrenMdx___slug',
	FrontmatterEmbeddedImagesLocalChildrenMdxTableOfContents = 'frontmatter___embeddedImagesLocal___childrenMdx___tableOfContents',
	FrontmatterEmbeddedImagesLocalChildrenMdxTimeToRead = 'frontmatter___embeddedImagesLocal___childrenMdx___timeToRead',
	FrontmatterEmbeddedImagesLocalChildrenChildren = 'frontmatter___embeddedImagesLocal___children___children',
	FrontmatterEmbeddedImagesLocalChildrenId = 'frontmatter___embeddedImagesLocal___children___id',
	FrontmatterEmbeddedImagesLocalCtime = 'frontmatter___embeddedImagesLocal___ctime',
	FrontmatterEmbeddedImagesLocalCtimeMs = 'frontmatter___embeddedImagesLocal___ctimeMs',
	FrontmatterEmbeddedImagesLocalDev = 'frontmatter___embeddedImagesLocal___dev',
	FrontmatterEmbeddedImagesLocalDir = 'frontmatter___embeddedImagesLocal___dir',
	FrontmatterEmbeddedImagesLocalExt = 'frontmatter___embeddedImagesLocal___ext',
	FrontmatterEmbeddedImagesLocalExtension = 'frontmatter___embeddedImagesLocal___extension',
	FrontmatterEmbeddedImagesLocalGid = 'frontmatter___embeddedImagesLocal___gid',
	FrontmatterEmbeddedImagesLocalId = 'frontmatter___embeddedImagesLocal___id',
	FrontmatterEmbeddedImagesLocalIno = 'frontmatter___embeddedImagesLocal___ino',
	FrontmatterEmbeddedImagesLocalInternalContent = 'frontmatter___embeddedImagesLocal___internal___content',
	FrontmatterEmbeddedImagesLocalInternalContentDigest = 'frontmatter___embeddedImagesLocal___internal___contentDigest',
	FrontmatterEmbeddedImagesLocalInternalDescription = 'frontmatter___embeddedImagesLocal___internal___description',
	FrontmatterEmbeddedImagesLocalInternalFieldOwners = 'frontmatter___embeddedImagesLocal___internal___fieldOwners',
	FrontmatterEmbeddedImagesLocalInternalIgnoreType = 'frontmatter___embeddedImagesLocal___internal___ignoreType',
	FrontmatterEmbeddedImagesLocalInternalMediaType = 'frontmatter___embeddedImagesLocal___internal___mediaType',
	FrontmatterEmbeddedImagesLocalInternalOwner = 'frontmatter___embeddedImagesLocal___internal___owner',
	FrontmatterEmbeddedImagesLocalInternalType = 'frontmatter___embeddedImagesLocal___internal___type',
	FrontmatterEmbeddedImagesLocalMode = 'frontmatter___embeddedImagesLocal___mode',
	FrontmatterEmbeddedImagesLocalModifiedTime = 'frontmatter___embeddedImagesLocal___modifiedTime',
	FrontmatterEmbeddedImagesLocalMtime = 'frontmatter___embeddedImagesLocal___mtime',
	FrontmatterEmbeddedImagesLocalMtimeMs = 'frontmatter___embeddedImagesLocal___mtimeMs',
	FrontmatterEmbeddedImagesLocalName = 'frontmatter___embeddedImagesLocal___name',
	FrontmatterEmbeddedImagesLocalNlink = 'frontmatter___embeddedImagesLocal___nlink',
	FrontmatterEmbeddedImagesLocalParentChildren = 'frontmatter___embeddedImagesLocal___parent___children',
	FrontmatterEmbeddedImagesLocalParentId = 'frontmatter___embeddedImagesLocal___parent___id',
	FrontmatterEmbeddedImagesLocalPrettySize = 'frontmatter___embeddedImagesLocal___prettySize',
	FrontmatterEmbeddedImagesLocalPublicUrl = 'frontmatter___embeddedImagesLocal___publicURL',
	FrontmatterEmbeddedImagesLocalRdev = 'frontmatter___embeddedImagesLocal___rdev',
	FrontmatterEmbeddedImagesLocalRelativeDirectory = 'frontmatter___embeddedImagesLocal___relativeDirectory',
	FrontmatterEmbeddedImagesLocalRelativePath = 'frontmatter___embeddedImagesLocal___relativePath',
	FrontmatterEmbeddedImagesLocalRoot = 'frontmatter___embeddedImagesLocal___root',
	FrontmatterEmbeddedImagesLocalSize = 'frontmatter___embeddedImagesLocal___size',
	FrontmatterEmbeddedImagesLocalSourceInstanceName = 'frontmatter___embeddedImagesLocal___sourceInstanceName',
	FrontmatterEmbeddedImagesLocalUid = 'frontmatter___embeddedImagesLocal___uid',
	FrontmatterEmbeddedImagesLocalUrl = 'frontmatter___embeddedImagesLocal___url',
	FrontmatterEmbeddedImagesRemote = 'frontmatter___embeddedImagesRemote',
	FrontmatterEmbeddedImagesRemoteAbsolutePath = 'frontmatter___embeddedImagesRemote___absolutePath',
	FrontmatterEmbeddedImagesRemoteAccessTime = 'frontmatter___embeddedImagesRemote___accessTime',
	FrontmatterEmbeddedImagesRemoteAtime = 'frontmatter___embeddedImagesRemote___atime',
	FrontmatterEmbeddedImagesRemoteAtimeMs = 'frontmatter___embeddedImagesRemote___atimeMs',
	FrontmatterEmbeddedImagesRemoteBase = 'frontmatter___embeddedImagesRemote___base',
	FrontmatterEmbeddedImagesRemoteBirthTime = 'frontmatter___embeddedImagesRemote___birthTime',
	FrontmatterEmbeddedImagesRemoteBirthtime = 'frontmatter___embeddedImagesRemote___birthtime',
	FrontmatterEmbeddedImagesRemoteBirthtimeMs = 'frontmatter___embeddedImagesRemote___birthtimeMs',
	FrontmatterEmbeddedImagesRemoteBlksize = 'frontmatter___embeddedImagesRemote___blksize',
	FrontmatterEmbeddedImagesRemoteBlocks = 'frontmatter___embeddedImagesRemote___blocks',
	FrontmatterEmbeddedImagesRemoteChangeTime = 'frontmatter___embeddedImagesRemote___changeTime',
	FrontmatterEmbeddedImagesRemoteChildImageSharpChildren = 'frontmatter___embeddedImagesRemote___childImageSharp___children',
	FrontmatterEmbeddedImagesRemoteChildImageSharpGatsbyImageData = 'frontmatter___embeddedImagesRemote___childImageSharp___gatsbyImageData',
	FrontmatterEmbeddedImagesRemoteChildImageSharpId = 'frontmatter___embeddedImagesRemote___childImageSharp___id',
	FrontmatterEmbeddedImagesRemoteChildMdxBody = 'frontmatter___embeddedImagesRemote___childMdx___body',
	FrontmatterEmbeddedImagesRemoteChildMdxChildren = 'frontmatter___embeddedImagesRemote___childMdx___children',
	FrontmatterEmbeddedImagesRemoteChildMdxExcerpt = 'frontmatter___embeddedImagesRemote___childMdx___excerpt',
	FrontmatterEmbeddedImagesRemoteChildMdxFileAbsolutePath = 'frontmatter___embeddedImagesRemote___childMdx___fileAbsolutePath',
	FrontmatterEmbeddedImagesRemoteChildMdxGatsbyPath = 'frontmatter___embeddedImagesRemote___childMdx___gatsbyPath',
	FrontmatterEmbeddedImagesRemoteChildMdxHeadings = 'frontmatter___embeddedImagesRemote___childMdx___headings',
	FrontmatterEmbeddedImagesRemoteChildMdxHtml = 'frontmatter___embeddedImagesRemote___childMdx___html',
	FrontmatterEmbeddedImagesRemoteChildMdxId = 'frontmatter___embeddedImagesRemote___childMdx___id',
	FrontmatterEmbeddedImagesRemoteChildMdxMdxAst = 'frontmatter___embeddedImagesRemote___childMdx___mdxAST',
	FrontmatterEmbeddedImagesRemoteChildMdxRawBody = 'frontmatter___embeddedImagesRemote___childMdx___rawBody',
	FrontmatterEmbeddedImagesRemoteChildMdxSlug = 'frontmatter___embeddedImagesRemote___childMdx___slug',
	FrontmatterEmbeddedImagesRemoteChildMdxTableOfContents = 'frontmatter___embeddedImagesRemote___childMdx___tableOfContents',
	FrontmatterEmbeddedImagesRemoteChildMdxTimeToRead = 'frontmatter___embeddedImagesRemote___childMdx___timeToRead',
	FrontmatterEmbeddedImagesRemoteChildren = 'frontmatter___embeddedImagesRemote___children',
	FrontmatterEmbeddedImagesRemoteChildrenImageSharp = 'frontmatter___embeddedImagesRemote___childrenImageSharp',
	FrontmatterEmbeddedImagesRemoteChildrenImageSharpChildren = 'frontmatter___embeddedImagesRemote___childrenImageSharp___children',
	FrontmatterEmbeddedImagesRemoteChildrenImageSharpGatsbyImageData = 'frontmatter___embeddedImagesRemote___childrenImageSharp___gatsbyImageData',
	FrontmatterEmbeddedImagesRemoteChildrenImageSharpId = 'frontmatter___embeddedImagesRemote___childrenImageSharp___id',
	FrontmatterEmbeddedImagesRemoteChildrenMdx = 'frontmatter___embeddedImagesRemote___childrenMdx',
	FrontmatterEmbeddedImagesRemoteChildrenMdxBody = 'frontmatter___embeddedImagesRemote___childrenMdx___body',
	FrontmatterEmbeddedImagesRemoteChildrenMdxChildren = 'frontmatter___embeddedImagesRemote___childrenMdx___children',
	FrontmatterEmbeddedImagesRemoteChildrenMdxExcerpt = 'frontmatter___embeddedImagesRemote___childrenMdx___excerpt',
	FrontmatterEmbeddedImagesRemoteChildrenMdxFileAbsolutePath = 'frontmatter___embeddedImagesRemote___childrenMdx___fileAbsolutePath',
	FrontmatterEmbeddedImagesRemoteChildrenMdxGatsbyPath = 'frontmatter___embeddedImagesRemote___childrenMdx___gatsbyPath',
	FrontmatterEmbeddedImagesRemoteChildrenMdxHeadings = 'frontmatter___embeddedImagesRemote___childrenMdx___headings',
	FrontmatterEmbeddedImagesRemoteChildrenMdxHtml = 'frontmatter___embeddedImagesRemote___childrenMdx___html',
	FrontmatterEmbeddedImagesRemoteChildrenMdxId = 'frontmatter___embeddedImagesRemote___childrenMdx___id',
	FrontmatterEmbeddedImagesRemoteChildrenMdxMdxAst = 'frontmatter___embeddedImagesRemote___childrenMdx___mdxAST',
	FrontmatterEmbeddedImagesRemoteChildrenMdxRawBody = 'frontmatter___embeddedImagesRemote___childrenMdx___rawBody',
	FrontmatterEmbeddedImagesRemoteChildrenMdxSlug = 'frontmatter___embeddedImagesRemote___childrenMdx___slug',
	FrontmatterEmbeddedImagesRemoteChildrenMdxTableOfContents = 'frontmatter___embeddedImagesRemote___childrenMdx___tableOfContents',
	FrontmatterEmbeddedImagesRemoteChildrenMdxTimeToRead = 'frontmatter___embeddedImagesRemote___childrenMdx___timeToRead',
	FrontmatterEmbeddedImagesRemoteChildrenChildren = 'frontmatter___embeddedImagesRemote___children___children',
	FrontmatterEmbeddedImagesRemoteChildrenId = 'frontmatter___embeddedImagesRemote___children___id',
	FrontmatterEmbeddedImagesRemoteCtime = 'frontmatter___embeddedImagesRemote___ctime',
	FrontmatterEmbeddedImagesRemoteCtimeMs = 'frontmatter___embeddedImagesRemote___ctimeMs',
	FrontmatterEmbeddedImagesRemoteDev = 'frontmatter___embeddedImagesRemote___dev',
	FrontmatterEmbeddedImagesRemoteDir = 'frontmatter___embeddedImagesRemote___dir',
	FrontmatterEmbeddedImagesRemoteExt = 'frontmatter___embeddedImagesRemote___ext',
	FrontmatterEmbeddedImagesRemoteExtension = 'frontmatter___embeddedImagesRemote___extension',
	FrontmatterEmbeddedImagesRemoteGid = 'frontmatter___embeddedImagesRemote___gid',
	FrontmatterEmbeddedImagesRemoteId = 'frontmatter___embeddedImagesRemote___id',
	FrontmatterEmbeddedImagesRemoteIno = 'frontmatter___embeddedImagesRemote___ino',
	FrontmatterEmbeddedImagesRemoteInternalContent = 'frontmatter___embeddedImagesRemote___internal___content',
	FrontmatterEmbeddedImagesRemoteInternalContentDigest = 'frontmatter___embeddedImagesRemote___internal___contentDigest',
	FrontmatterEmbeddedImagesRemoteInternalDescription = 'frontmatter___embeddedImagesRemote___internal___description',
	FrontmatterEmbeddedImagesRemoteInternalFieldOwners = 'frontmatter___embeddedImagesRemote___internal___fieldOwners',
	FrontmatterEmbeddedImagesRemoteInternalIgnoreType = 'frontmatter___embeddedImagesRemote___internal___ignoreType',
	FrontmatterEmbeddedImagesRemoteInternalMediaType = 'frontmatter___embeddedImagesRemote___internal___mediaType',
	FrontmatterEmbeddedImagesRemoteInternalOwner = 'frontmatter___embeddedImagesRemote___internal___owner',
	FrontmatterEmbeddedImagesRemoteInternalType = 'frontmatter___embeddedImagesRemote___internal___type',
	FrontmatterEmbeddedImagesRemoteMode = 'frontmatter___embeddedImagesRemote___mode',
	FrontmatterEmbeddedImagesRemoteModifiedTime = 'frontmatter___embeddedImagesRemote___modifiedTime',
	FrontmatterEmbeddedImagesRemoteMtime = 'frontmatter___embeddedImagesRemote___mtime',
	FrontmatterEmbeddedImagesRemoteMtimeMs = 'frontmatter___embeddedImagesRemote___mtimeMs',
	FrontmatterEmbeddedImagesRemoteName = 'frontmatter___embeddedImagesRemote___name',
	FrontmatterEmbeddedImagesRemoteNlink = 'frontmatter___embeddedImagesRemote___nlink',
	FrontmatterEmbeddedImagesRemoteParentChildren = 'frontmatter___embeddedImagesRemote___parent___children',
	FrontmatterEmbeddedImagesRemoteParentId = 'frontmatter___embeddedImagesRemote___parent___id',
	FrontmatterEmbeddedImagesRemotePrettySize = 'frontmatter___embeddedImagesRemote___prettySize',
	FrontmatterEmbeddedImagesRemotePublicUrl = 'frontmatter___embeddedImagesRemote___publicURL',
	FrontmatterEmbeddedImagesRemoteRdev = 'frontmatter___embeddedImagesRemote___rdev',
	FrontmatterEmbeddedImagesRemoteRelativeDirectory = 'frontmatter___embeddedImagesRemote___relativeDirectory',
	FrontmatterEmbeddedImagesRemoteRelativePath = 'frontmatter___embeddedImagesRemote___relativePath',
	FrontmatterEmbeddedImagesRemoteRoot = 'frontmatter___embeddedImagesRemote___root',
	FrontmatterEmbeddedImagesRemoteSize = 'frontmatter___embeddedImagesRemote___size',
	FrontmatterEmbeddedImagesRemoteSourceInstanceName = 'frontmatter___embeddedImagesRemote___sourceInstanceName',
	FrontmatterEmbeddedImagesRemoteUid = 'frontmatter___embeddedImagesRemote___uid',
	FrontmatterEmbeddedImagesRemoteUrl = 'frontmatter___embeddedImagesRemote___url',
	FrontmatterFeatured = 'frontmatter___featured',
	FrontmatterFeaturedImageAbsolutePath = 'frontmatter___featuredImage___absolutePath',
	FrontmatterFeaturedImageAccessTime = 'frontmatter___featuredImage___accessTime',
	FrontmatterFeaturedImageAtime = 'frontmatter___featuredImage___atime',
	FrontmatterFeaturedImageAtimeMs = 'frontmatter___featuredImage___atimeMs',
	FrontmatterFeaturedImageBase = 'frontmatter___featuredImage___base',
	FrontmatterFeaturedImageBirthTime = 'frontmatter___featuredImage___birthTime',
	FrontmatterFeaturedImageBirthtime = 'frontmatter___featuredImage___birthtime',
	FrontmatterFeaturedImageBirthtimeMs = 'frontmatter___featuredImage___birthtimeMs',
	FrontmatterFeaturedImageBlksize = 'frontmatter___featuredImage___blksize',
	FrontmatterFeaturedImageBlocks = 'frontmatter___featuredImage___blocks',
	FrontmatterFeaturedImageChangeTime = 'frontmatter___featuredImage___changeTime',
	FrontmatterFeaturedImageChildImageSharpChildren = 'frontmatter___featuredImage___childImageSharp___children',
	FrontmatterFeaturedImageChildImageSharpGatsbyImageData = 'frontmatter___featuredImage___childImageSharp___gatsbyImageData',
	FrontmatterFeaturedImageChildImageSharpId = 'frontmatter___featuredImage___childImageSharp___id',
	FrontmatterFeaturedImageChildMdxBody = 'frontmatter___featuredImage___childMdx___body',
	FrontmatterFeaturedImageChildMdxChildren = 'frontmatter___featuredImage___childMdx___children',
	FrontmatterFeaturedImageChildMdxExcerpt = 'frontmatter___featuredImage___childMdx___excerpt',
	FrontmatterFeaturedImageChildMdxFileAbsolutePath = 'frontmatter___featuredImage___childMdx___fileAbsolutePath',
	FrontmatterFeaturedImageChildMdxGatsbyPath = 'frontmatter___featuredImage___childMdx___gatsbyPath',
	FrontmatterFeaturedImageChildMdxHeadings = 'frontmatter___featuredImage___childMdx___headings',
	FrontmatterFeaturedImageChildMdxHtml = 'frontmatter___featuredImage___childMdx___html',
	FrontmatterFeaturedImageChildMdxId = 'frontmatter___featuredImage___childMdx___id',
	FrontmatterFeaturedImageChildMdxMdxAst = 'frontmatter___featuredImage___childMdx___mdxAST',
	FrontmatterFeaturedImageChildMdxRawBody = 'frontmatter___featuredImage___childMdx___rawBody',
	FrontmatterFeaturedImageChildMdxSlug = 'frontmatter___featuredImage___childMdx___slug',
	FrontmatterFeaturedImageChildMdxTableOfContents = 'frontmatter___featuredImage___childMdx___tableOfContents',
	FrontmatterFeaturedImageChildMdxTimeToRead = 'frontmatter___featuredImage___childMdx___timeToRead',
	FrontmatterFeaturedImageChildren = 'frontmatter___featuredImage___children',
	FrontmatterFeaturedImageChildrenImageSharp = 'frontmatter___featuredImage___childrenImageSharp',
	FrontmatterFeaturedImageChildrenImageSharpChildren = 'frontmatter___featuredImage___childrenImageSharp___children',
	FrontmatterFeaturedImageChildrenImageSharpGatsbyImageData = 'frontmatter___featuredImage___childrenImageSharp___gatsbyImageData',
	FrontmatterFeaturedImageChildrenImageSharpId = 'frontmatter___featuredImage___childrenImageSharp___id',
	FrontmatterFeaturedImageChildrenMdx = 'frontmatter___featuredImage___childrenMdx',
	FrontmatterFeaturedImageChildrenMdxBody = 'frontmatter___featuredImage___childrenMdx___body',
	FrontmatterFeaturedImageChildrenMdxChildren = 'frontmatter___featuredImage___childrenMdx___children',
	FrontmatterFeaturedImageChildrenMdxExcerpt = 'frontmatter___featuredImage___childrenMdx___excerpt',
	FrontmatterFeaturedImageChildrenMdxFileAbsolutePath = 'frontmatter___featuredImage___childrenMdx___fileAbsolutePath',
	FrontmatterFeaturedImageChildrenMdxGatsbyPath = 'frontmatter___featuredImage___childrenMdx___gatsbyPath',
	FrontmatterFeaturedImageChildrenMdxHeadings = 'frontmatter___featuredImage___childrenMdx___headings',
	FrontmatterFeaturedImageChildrenMdxHtml = 'frontmatter___featuredImage___childrenMdx___html',
	FrontmatterFeaturedImageChildrenMdxId = 'frontmatter___featuredImage___childrenMdx___id',
	FrontmatterFeaturedImageChildrenMdxMdxAst = 'frontmatter___featuredImage___childrenMdx___mdxAST',
	FrontmatterFeaturedImageChildrenMdxRawBody = 'frontmatter___featuredImage___childrenMdx___rawBody',
	FrontmatterFeaturedImageChildrenMdxSlug = 'frontmatter___featuredImage___childrenMdx___slug',
	FrontmatterFeaturedImageChildrenMdxTableOfContents = 'frontmatter___featuredImage___childrenMdx___tableOfContents',
	FrontmatterFeaturedImageChildrenMdxTimeToRead = 'frontmatter___featuredImage___childrenMdx___timeToRead',
	FrontmatterFeaturedImageChildrenChildren = 'frontmatter___featuredImage___children___children',
	FrontmatterFeaturedImageChildrenId = 'frontmatter___featuredImage___children___id',
	FrontmatterFeaturedImageCtime = 'frontmatter___featuredImage___ctime',
	FrontmatterFeaturedImageCtimeMs = 'frontmatter___featuredImage___ctimeMs',
	FrontmatterFeaturedImageDev = 'frontmatter___featuredImage___dev',
	FrontmatterFeaturedImageDir = 'frontmatter___featuredImage___dir',
	FrontmatterFeaturedImageExt = 'frontmatter___featuredImage___ext',
	FrontmatterFeaturedImageExtension = 'frontmatter___featuredImage___extension',
	FrontmatterFeaturedImageGid = 'frontmatter___featuredImage___gid',
	FrontmatterFeaturedImageId = 'frontmatter___featuredImage___id',
	FrontmatterFeaturedImageIno = 'frontmatter___featuredImage___ino',
	FrontmatterFeaturedImageInternalContent = 'frontmatter___featuredImage___internal___content',
	FrontmatterFeaturedImageInternalContentDigest = 'frontmatter___featuredImage___internal___contentDigest',
	FrontmatterFeaturedImageInternalDescription = 'frontmatter___featuredImage___internal___description',
	FrontmatterFeaturedImageInternalFieldOwners = 'frontmatter___featuredImage___internal___fieldOwners',
	FrontmatterFeaturedImageInternalIgnoreType = 'frontmatter___featuredImage___internal___ignoreType',
	FrontmatterFeaturedImageInternalMediaType = 'frontmatter___featuredImage___internal___mediaType',
	FrontmatterFeaturedImageInternalOwner = 'frontmatter___featuredImage___internal___owner',
	FrontmatterFeaturedImageInternalType = 'frontmatter___featuredImage___internal___type',
	FrontmatterFeaturedImageMode = 'frontmatter___featuredImage___mode',
	FrontmatterFeaturedImageModifiedTime = 'frontmatter___featuredImage___modifiedTime',
	FrontmatterFeaturedImageMtime = 'frontmatter___featuredImage___mtime',
	FrontmatterFeaturedImageMtimeMs = 'frontmatter___featuredImage___mtimeMs',
	FrontmatterFeaturedImageName = 'frontmatter___featuredImage___name',
	FrontmatterFeaturedImageNlink = 'frontmatter___featuredImage___nlink',
	FrontmatterFeaturedImageParentChildren = 'frontmatter___featuredImage___parent___children',
	FrontmatterFeaturedImageParentId = 'frontmatter___featuredImage___parent___id',
	FrontmatterFeaturedImagePrettySize = 'frontmatter___featuredImage___prettySize',
	FrontmatterFeaturedImagePublicUrl = 'frontmatter___featuredImage___publicURL',
	FrontmatterFeaturedImageRdev = 'frontmatter___featuredImage___rdev',
	FrontmatterFeaturedImageRelativeDirectory = 'frontmatter___featuredImage___relativeDirectory',
	FrontmatterFeaturedImageRelativePath = 'frontmatter___featuredImage___relativePath',
	FrontmatterFeaturedImageRoot = 'frontmatter___featuredImage___root',
	FrontmatterFeaturedImageSize = 'frontmatter___featuredImage___size',
	FrontmatterFeaturedImageSourceInstanceName = 'frontmatter___featuredImage___sourceInstanceName',
	FrontmatterFeaturedImageUid = 'frontmatter___featuredImage___uid',
	FrontmatterFeaturedImageUrl = 'frontmatter___featuredImage___url',
	FrontmatterPublished = 'frontmatter___published',
	FrontmatterTitle = 'frontmatter___title',
	FrontmatterUpdated = 'frontmatter___updated',
	GatsbyPath = 'gatsbyPath',
	Headings = 'headings',
	HeadingsDepth = 'headings___depth',
	HeadingsValue = 'headings___value',
	Html = 'html',
	Id = 'id',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	MdxAst = 'mdxAST',
	ParentChildren = 'parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentId = 'parent___id',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentId = 'parent___parent___id',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentParentId = 'parent___parent___parent___id',
	RawBody = 'rawBody',
	Slug = 'slug',
	TableOfContents = 'tableOfContents',
	TimeToRead = 'timeToRead',
	WordCountParagraphs = 'wordCount___paragraphs',
	WordCountSentences = 'wordCount___sentences',
	WordCountWords = 'wordCount___words',
}

export type MdxFilterInput = {
	body?: Maybe<StringQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	excerpt?: Maybe<StringQueryOperatorInput>
	fileAbsolutePath?: Maybe<StringQueryOperatorInput>
	frontmatter?: Maybe<FrontmatterFilterInput>
	gatsbyPath?: Maybe<StringQueryOperatorInput>
	headings?: Maybe<MdxHeadingMdxFilterListInput>
	html?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	mdxAST?: Maybe<JsonQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	rawBody?: Maybe<StringQueryOperatorInput>
	slug?: Maybe<StringQueryOperatorInput>
	tableOfContents?: Maybe<JsonQueryOperatorInput>
	timeToRead?: Maybe<IntQueryOperatorInput>
	wordCount?: Maybe<MdxWordCountFilterInput>
}

export type MdxFilterListInput = {
	elemMatch?: Maybe<MdxFilterInput>
}

export type MdxFrontmatter = {
	__typename?: 'MdxFrontmatter'
	title: Scalars['String']
}

export type MdxGroupConnection = {
	__typename?: 'MdxGroupConnection'
	distinct: Array<Scalars['String']>
	edges: Array<MdxEdge>
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
	group: Array<MdxGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<Mdx>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type MdxGroupConnectionDistinctArgs = {
	field: MdxFieldsEnum
}

export type MdxGroupConnectionGroupArgs = {
	field: MdxFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type MdxGroupConnectionMaxArgs = {
	field: MdxFieldsEnum
}

export type MdxGroupConnectionMinArgs = {
	field: MdxFieldsEnum
}

export type MdxGroupConnectionSumArgs = {
	field: MdxFieldsEnum
}

export type MdxHeadingMdx = {
	__typename?: 'MdxHeadingMdx'
	depth?: Maybe<Scalars['Int']>
	value?: Maybe<Scalars['String']>
}

export type MdxHeadingMdxFilterInput = {
	depth?: Maybe<IntQueryOperatorInput>
	value?: Maybe<StringQueryOperatorInput>
}

export type MdxHeadingMdxFilterListInput = {
	elemMatch?: Maybe<MdxHeadingMdxFilterInput>
}

export type MdxSortInput = {
	fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type MdxWordCount = {
	__typename?: 'MdxWordCount'
	paragraphs?: Maybe<Scalars['Int']>
	sentences?: Maybe<Scalars['Int']>
	words?: Maybe<Scalars['Int']>
}

export type MdxWordCountFilterInput = {
	paragraphs?: Maybe<IntQueryOperatorInput>
	sentences?: Maybe<IntQueryOperatorInput>
	words?: Maybe<IntQueryOperatorInput>
}

/** Node Interface */
export type Node = {
	children: Array<Node>
	id: Scalars['ID']
	internal: Internal
	parent?: Maybe<Node>
}

export type NodeFilterInput = {
	children?: Maybe<NodeFilterListInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	parent?: Maybe<NodeFilterInput>
}

export type NodeFilterListInput = {
	elemMatch?: Maybe<NodeFilterInput>
}

export type PngOptions = {
	compressionSpeed?: Maybe<Scalars['Int']>
	quality?: Maybe<Scalars['Int']>
}

export type PageInfo = {
	__typename?: 'PageInfo'
	currentPage: Scalars['Int']
	hasNextPage: Scalars['Boolean']
	hasPreviousPage: Scalars['Boolean']
	itemCount: Scalars['Int']
	pageCount: Scalars['Int']
	perPage?: Maybe<Scalars['Int']>
	totalCount: Scalars['Int']
}

export type Potrace = {
	alphaMax?: Maybe<Scalars['Float']>
	background?: Maybe<Scalars['String']>
	blackOnWhite?: Maybe<Scalars['Boolean']>
	color?: Maybe<Scalars['String']>
	optCurve?: Maybe<Scalars['Boolean']>
	optTolerance?: Maybe<Scalars['Float']>
	threshold?: Maybe<Scalars['Int']>
	turdSize?: Maybe<Scalars['Float']>
	turnPolicy?: Maybe<PotraceTurnPolicy>
}

export enum PotraceTurnPolicy {
	TurnpolicyBlack = 'TURNPOLICY_BLACK',
	TurnpolicyLeft = 'TURNPOLICY_LEFT',
	TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
	TurnpolicyMinority = 'TURNPOLICY_MINORITY',
	TurnpolicyRight = 'TURNPOLICY_RIGHT',
	TurnpolicyWhite = 'TURNPOLICY_WHITE',
}

export type Query = {
	__typename?: 'Query'
	allDirectory: DirectoryConnection
	allFile: FileConnection
	allImageSharp: ImageSharpConnection
	allMdx: MdxConnection
	allSite: SiteConnection
	allSiteBuildMetadata: SiteBuildMetadataConnection
	allSiteFunction: SiteFunctionConnection
	allSitePage: SitePageConnection
	allSitePlugin: SitePluginConnection
	directory?: Maybe<Directory>
	file?: Maybe<File>
	imageSharp?: Maybe<ImageSharp>
	mdx?: Maybe<Mdx>
	site?: Maybe<Site>
	siteBuildMetadata?: Maybe<SiteBuildMetadata>
	siteFunction?: Maybe<SiteFunction>
	sitePage?: Maybe<SitePage>
	sitePlugin?: Maybe<SitePlugin>
}

export type QueryAllDirectoryArgs = {
	filter?: Maybe<DirectoryFilterInput>
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
	sort?: Maybe<DirectorySortInput>
}

export type QueryAllFileArgs = {
	filter?: Maybe<FileFilterInput>
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
	sort?: Maybe<FileSortInput>
}

export type QueryAllImageSharpArgs = {
	filter?: Maybe<ImageSharpFilterInput>
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
	sort?: Maybe<ImageSharpSortInput>
}

export type QueryAllMdxArgs = {
	filter?: Maybe<MdxFilterInput>
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
	sort?: Maybe<MdxSortInput>
}

export type QueryAllSiteArgs = {
	filter?: Maybe<SiteFilterInput>
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
	sort?: Maybe<SiteSortInput>
}

export type QueryAllSiteBuildMetadataArgs = {
	filter?: Maybe<SiteBuildMetadataFilterInput>
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
	sort?: Maybe<SiteBuildMetadataSortInput>
}

export type QueryAllSiteFunctionArgs = {
	filter?: Maybe<SiteFunctionFilterInput>
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
	sort?: Maybe<SiteFunctionSortInput>
}

export type QueryAllSitePageArgs = {
	filter?: Maybe<SitePageFilterInput>
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
	sort?: Maybe<SitePageSortInput>
}

export type QueryAllSitePluginArgs = {
	filter?: Maybe<SitePluginFilterInput>
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
	sort?: Maybe<SitePluginSortInput>
}

export type QueryDirectoryArgs = {
	absolutePath?: Maybe<StringQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	blksize?: Maybe<IntQueryOperatorInput>
	blocks?: Maybe<IntQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	ctime?: Maybe<DateQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	mode?: Maybe<IntQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
}

export type QueryFileArgs = {
	absolutePath?: Maybe<StringQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	blksize?: Maybe<IntQueryOperatorInput>
	blocks?: Maybe<IntQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	childImageSharp?: Maybe<ImageSharpFilterInput>
	childMdx?: Maybe<MdxFilterInput>
	children?: Maybe<NodeFilterListInput>
	childrenImageSharp?: Maybe<ImageSharpFilterListInput>
	childrenMdx?: Maybe<MdxFilterListInput>
	ctime?: Maybe<DateQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	mode?: Maybe<IntQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	publicURL?: Maybe<StringQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
}

export type QueryImageSharpArgs = {
	children?: Maybe<NodeFilterListInput>
	fixed?: Maybe<ImageSharpFixedFilterInput>
	fluid?: Maybe<ImageSharpFluidFilterInput>
	gatsbyImageData?: Maybe<JsonQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	original?: Maybe<ImageSharpOriginalFilterInput>
	parent?: Maybe<NodeFilterInput>
	resize?: Maybe<ImageSharpResizeFilterInput>
}

export type QueryMdxArgs = {
	body?: Maybe<StringQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	excerpt?: Maybe<StringQueryOperatorInput>
	fileAbsolutePath?: Maybe<StringQueryOperatorInput>
	frontmatter?: Maybe<FrontmatterFilterInput>
	gatsbyPath?: Maybe<StringQueryOperatorInput>
	headings?: Maybe<MdxHeadingMdxFilterListInput>
	html?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	mdxAST?: Maybe<JsonQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	rawBody?: Maybe<StringQueryOperatorInput>
	slug?: Maybe<StringQueryOperatorInput>
	tableOfContents?: Maybe<JsonQueryOperatorInput>
	timeToRead?: Maybe<IntQueryOperatorInput>
	wordCount?: Maybe<MdxWordCountFilterInput>
}

export type QuerySiteArgs = {
	buildTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	flags?: Maybe<SiteFlagsFilterInput>
	host?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	parent?: Maybe<NodeFilterInput>
	pathPrefix?: Maybe<StringQueryOperatorInput>
	polyfill?: Maybe<BooleanQueryOperatorInput>
	port?: Maybe<IntQueryOperatorInput>
	siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
}

export type QuerySiteBuildMetadataArgs = {
	buildTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	parent?: Maybe<NodeFilterInput>
}

export type QuerySiteFunctionArgs = {
	absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	functionRoute?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
	originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	pluginName?: Maybe<StringQueryOperatorInput>
	relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
}

export type QuerySitePageArgs = {
	children?: Maybe<NodeFilterListInput>
	component?: Maybe<StringQueryOperatorInput>
	componentChunkName?: Maybe<StringQueryOperatorInput>
	context?: Maybe<SitePageContextFilterInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	internalComponentName?: Maybe<StringQueryOperatorInput>
	isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	path?: Maybe<StringQueryOperatorInput>
	pluginCreator?: Maybe<SitePluginFilterInput>
	pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type QuerySitePluginArgs = {
	browserAPIs?: Maybe<StringQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	name?: Maybe<StringQueryOperatorInput>
	nodeAPIs?: Maybe<StringQueryOperatorInput>
	packageJson?: Maybe<SitePluginPackageJsonFilterInput>
	parent?: Maybe<NodeFilterInput>
	pluginFilepath?: Maybe<StringQueryOperatorInput>
	pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
	resolve?: Maybe<StringQueryOperatorInput>
	ssrAPIs?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type Site = Node & {
	__typename?: 'Site'
	buildTime?: Maybe<Scalars['Date']>
	children: Array<Node>
	flags?: Maybe<SiteFlags>
	host?: Maybe<Scalars['String']>
	id: Scalars['ID']
	internal: Internal
	parent?: Maybe<Node>
	pathPrefix?: Maybe<Scalars['String']>
	polyfill?: Maybe<Scalars['Boolean']>
	port?: Maybe<Scalars['Int']>
	siteMetadata?: Maybe<SiteSiteMetadata>
}

export type SiteBuildTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
	__typename?: 'SiteBuildMetadata'
	buildTime?: Maybe<Scalars['Date']>
	children: Array<Node>
	id: Scalars['ID']
	internal: Internal
	parent?: Maybe<Node>
}

export type SiteBuildMetadataBuildTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
	__typename?: 'SiteBuildMetadataConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SiteBuildMetadataEdge>
	group: Array<SiteBuildMetadataGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<SiteBuildMetadata>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SiteBuildMetadataConnectionDistinctArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
	field: SiteBuildMetadataFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SiteBuildMetadataConnectionMaxArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMinArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionSumArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
	__typename?: 'SiteBuildMetadataEdge'
	next?: Maybe<SiteBuildMetadata>
	node: SiteBuildMetadata
	previous?: Maybe<SiteBuildMetadata>
}

export enum SiteBuildMetadataFieldsEnum {
	BuildTime = 'buildTime',
	Children = 'children',
	ChildrenChildren = 'children___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenId = 'children___id',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentParentId = 'children___parent___parent___id',
	Id = 'id',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	ParentChildren = 'parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentId = 'parent___id',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentId = 'parent___parent___id',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentParentId = 'parent___parent___parent___id',
}

export type SiteBuildMetadataFilterInput = {
	buildTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	parent?: Maybe<NodeFilterInput>
}

export type SiteBuildMetadataGroupConnection = {
	__typename?: 'SiteBuildMetadataGroupConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SiteBuildMetadataEdge>
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
	group: Array<SiteBuildMetadataGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<SiteBuildMetadata>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionGroupArgs = {
	field: SiteBuildMetadataFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SiteBuildMetadataGroupConnectionMaxArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionMinArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionSumArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataSortInput = {
	fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteConnection = {
	__typename?: 'SiteConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SiteEdge>
	group: Array<SiteGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<Site>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SiteConnectionDistinctArgs = {
	field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
	field: SiteFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SiteConnectionMaxArgs = {
	field: SiteFieldsEnum
}

export type SiteConnectionMinArgs = {
	field: SiteFieldsEnum
}

export type SiteConnectionSumArgs = {
	field: SiteFieldsEnum
}

export type SiteEdge = {
	__typename?: 'SiteEdge'
	next?: Maybe<Site>
	node: Site
	previous?: Maybe<Site>
}

export enum SiteFieldsEnum {
	BuildTime = 'buildTime',
	Children = 'children',
	ChildrenChildren = 'children___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenId = 'children___id',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentParentId = 'children___parent___parent___id',
	FlagsFastDev = 'flags___FAST_DEV',
	FlagsParallelSourcing = 'flags___PARALLEL_SOURCING',
	Host = 'host',
	Id = 'id',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	ParentChildren = 'parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentId = 'parent___id',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentId = 'parent___parent___id',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentParentId = 'parent___parent___parent___id',
	PathPrefix = 'pathPrefix',
	Polyfill = 'polyfill',
	Port = 'port',
	SiteMetadataAuthorName = 'siteMetadata___author___name',
	SiteMetadataAuthorSummary = 'siteMetadata___author___summary',
	SiteMetadataDescription = 'siteMetadata___description',
	SiteMetadataFavicon = 'siteMetadata___favicon',
	SiteMetadataImage = 'siteMetadata___image',
	SiteMetadataLastBuildDate = 'siteMetadata___lastBuildDate',
	SiteMetadataOgLanguage = 'siteMetadata___ogLanguage',
	SiteMetadataSiteLanguage = 'siteMetadata___siteLanguage',
	SiteMetadataSiteLocale = 'siteMetadata___siteLocale',
	SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
	SiteMetadataSocialGithubUrl = 'siteMetadata___social___github___url',
	SiteMetadataSocialGithubUsername = 'siteMetadata___social___github___username',
	SiteMetadataSocialLinkedinUrl = 'siteMetadata___social___linkedin___url',
	SiteMetadataSocialLinkedinUsername = 'siteMetadata___social___linkedin___username',
	SiteMetadataSocialTwitterHandle = 'siteMetadata___social___twitter___handle',
	SiteMetadataSocialTwitterUrl = 'siteMetadata___social___twitter___url',
	SiteMetadataTitle = 'siteMetadata___title',
}

export type SiteFilterInput = {
	buildTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	flags?: Maybe<SiteFlagsFilterInput>
	host?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	parent?: Maybe<NodeFilterInput>
	pathPrefix?: Maybe<StringQueryOperatorInput>
	polyfill?: Maybe<BooleanQueryOperatorInput>
	port?: Maybe<IntQueryOperatorInput>
	siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
}

export type SiteFlags = {
	__typename?: 'SiteFlags'
	FAST_DEV?: Maybe<Scalars['Boolean']>
	PARALLEL_SOURCING?: Maybe<Scalars['Boolean']>
}

export type SiteFlagsFilterInput = {
	FAST_DEV?: Maybe<BooleanQueryOperatorInput>
	PARALLEL_SOURCING?: Maybe<BooleanQueryOperatorInput>
}

export type SiteFunction = Node & {
	__typename?: 'SiteFunction'
	absoluteCompiledFilePath: Scalars['String']
	children: Array<Node>
	functionRoute: Scalars['String']
	id: Scalars['ID']
	internal: Internal
	matchPath?: Maybe<Scalars['String']>
	originalAbsoluteFilePath: Scalars['String']
	originalRelativeFilePath: Scalars['String']
	parent?: Maybe<Node>
	pluginName: Scalars['String']
	relativeCompiledFilePath: Scalars['String']
}

export type SiteFunctionConnection = {
	__typename?: 'SiteFunctionConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SiteFunctionEdge>
	group: Array<SiteFunctionGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<SiteFunction>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SiteFunctionConnectionDistinctArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionGroupArgs = {
	field: SiteFunctionFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SiteFunctionConnectionMaxArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMinArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionSumArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionEdge = {
	__typename?: 'SiteFunctionEdge'
	next?: Maybe<SiteFunction>
	node: SiteFunction
	previous?: Maybe<SiteFunction>
}

export enum SiteFunctionFieldsEnum {
	AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
	Children = 'children',
	ChildrenChildren = 'children___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenId = 'children___id',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentParentId = 'children___parent___parent___id',
	FunctionRoute = 'functionRoute',
	Id = 'id',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	MatchPath = 'matchPath',
	OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
	OriginalRelativeFilePath = 'originalRelativeFilePath',
	ParentChildren = 'parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentId = 'parent___id',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentId = 'parent___parent___id',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentParentId = 'parent___parent___parent___id',
	PluginName = 'pluginName',
	RelativeCompiledFilePath = 'relativeCompiledFilePath',
}

export type SiteFunctionFilterInput = {
	absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	functionRoute?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
	originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	pluginName?: Maybe<StringQueryOperatorInput>
	relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
}

export type SiteFunctionGroupConnection = {
	__typename?: 'SiteFunctionGroupConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SiteFunctionEdge>
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
	group: Array<SiteFunctionGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<SiteFunction>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SiteFunctionGroupConnectionDistinctArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionGroupArgs = {
	field: SiteFunctionFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SiteFunctionGroupConnectionMaxArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionMinArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionSumArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionSortInput = {
	fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteGroupConnection = {
	__typename?: 'SiteGroupConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SiteEdge>
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
	group: Array<SiteGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<Site>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SiteGroupConnectionDistinctArgs = {
	field: SiteFieldsEnum
}

export type SiteGroupConnectionGroupArgs = {
	field: SiteFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SiteGroupConnectionMaxArgs = {
	field: SiteFieldsEnum
}

export type SiteGroupConnectionMinArgs = {
	field: SiteFieldsEnum
}

export type SiteGroupConnectionSumArgs = {
	field: SiteFieldsEnum
}

export type SitePage = Node & {
	__typename?: 'SitePage'
	children: Array<Node>
	component: Scalars['String']
	componentChunkName: Scalars['String']
	context?: Maybe<SitePageContext>
	id: Scalars['ID']
	internal: Internal
	internalComponentName: Scalars['String']
	isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
	matchPath?: Maybe<Scalars['String']>
	parent?: Maybe<Node>
	path: Scalars['String']
	pluginCreator?: Maybe<SitePlugin>
	pluginCreatorId?: Maybe<Scalars['String']>
}

export type SitePageConnection = {
	__typename?: 'SitePageConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SitePageEdge>
	group: Array<SitePageGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<SitePage>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SitePageConnectionDistinctArgs = {
	field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
	field: SitePageFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SitePageConnectionMaxArgs = {
	field: SitePageFieldsEnum
}

export type SitePageConnectionMinArgs = {
	field: SitePageFieldsEnum
}

export type SitePageConnectionSumArgs = {
	field: SitePageFieldsEnum
}

export type SitePageContext = {
	__typename?: 'SitePageContext'
	_xparams?: Maybe<SitePageContext_Xparams>
	id?: Maybe<Scalars['String']>
	slug?: Maybe<Scalars['String']>
}

export type SitePageContextFilterInput = {
	_xparams?: Maybe<SitePageContext_XparamsFilterInput>
	id?: Maybe<StringQueryOperatorInput>
	slug?: Maybe<StringQueryOperatorInput>
}

export type SitePageContext_Xparams = {
	__typename?: 'SitePageContext_xparams'
	slug?: Maybe<Scalars['String']>
}

export type SitePageContext_XparamsFilterInput = {
	slug?: Maybe<StringQueryOperatorInput>
}

export type SitePageEdge = {
	__typename?: 'SitePageEdge'
	next?: Maybe<SitePage>
	node: SitePage
	previous?: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
	Children = 'children',
	ChildrenChildren = 'children___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenId = 'children___id',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentParentId = 'children___parent___parent___id',
	Component = 'component',
	ComponentChunkName = 'componentChunkName',
	ContextXparamsSlug = 'context____xparams___slug',
	ContextId = 'context___id',
	ContextSlug = 'context___slug',
	Id = 'id',
	InternalComponentName = 'internalComponentName',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
	MatchPath = 'matchPath',
	ParentChildren = 'parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentId = 'parent___id',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentId = 'parent___parent___id',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentParentId = 'parent___parent___parent___id',
	Path = 'path',
	PluginCreatorId = 'pluginCreatorId',
	PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
	PluginCreatorChildren = 'pluginCreator___children',
	PluginCreatorChildrenChildren = 'pluginCreator___children___children',
	PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
	PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
	PluginCreatorChildrenId = 'pluginCreator___children___id',
	PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
	PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
	PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
	PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
	PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
	PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
	PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
	PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
	PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
	PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
	PluginCreatorId = 'pluginCreator___id',
	PluginCreatorInternalContent = 'pluginCreator___internal___content',
	PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
	PluginCreatorInternalDescription = 'pluginCreator___internal___description',
	PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
	PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
	PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
	PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
	PluginCreatorInternalType = 'pluginCreator___internal___type',
	PluginCreatorName = 'pluginCreator___name',
	PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
	PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
	PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
	PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
	PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
	PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
	PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
	PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
	PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
	PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
	PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
	PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
	PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
	PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
	PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
	PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
	PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
	PluginCreatorParentChildren = 'pluginCreator___parent___children',
	PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
	PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
	PluginCreatorParentId = 'pluginCreator___parent___id',
	PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
	PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
	PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
	PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
	PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
	PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
	PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
	PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
	PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
	PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
	PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
	PluginCreatorPluginOptions = 'pluginCreator___pluginOptions____',
	PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
	PluginCreatorPluginOptionsAssets = 'pluginCreator___pluginOptions___assets',
	PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
	PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
	PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
	PluginCreatorPluginOptionsComponents = 'pluginCreator___pluginOptions___components',
	PluginCreatorPluginOptionsCreateLinkInHead = 'pluginCreator___pluginOptions___createLinkInHead',
	PluginCreatorPluginOptionsCrossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
	PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
	PluginCreatorPluginOptionsDirectivesConnectSrc = 'pluginCreator___pluginOptions___directives___connect_src',
	PluginCreatorPluginOptionsDirectivesImgSrc = 'pluginCreator___pluginOptions___directives___img_src',
	PluginCreatorPluginOptionsDirectivesReportTo = 'pluginCreator___pluginOptions___directives___report_to',
	PluginCreatorPluginOptionsDirectivesScriptSrc = 'pluginCreator___pluginOptions___directives___script_src',
	PluginCreatorPluginOptionsDirectivesStyleSrc = 'pluginCreator___pluginOptions___directives___style_src',
	PluginCreatorPluginOptionsEndpoint = 'pluginCreator___pluginOptions___endpoint',
	PluginCreatorPluginOptionsEntryLimit = 'pluginCreator___pluginOptions___entryLimit',
	PluginCreatorPluginOptionsExcludes = 'pluginCreator___pluginOptions___excludes',
	PluginCreatorPluginOptionsExtensions = 'pluginCreator___pluginOptions___extensions',
	PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
	PluginCreatorPluginOptionsHeadersX = 'pluginCreator___pluginOptions___headers____x',
	PluginCreatorPluginOptionsHooks = 'pluginCreator___pluginOptions___hooks',
	PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
	PluginCreatorPluginOptionsImages = 'pluginCreator___pluginOptions___images',
	PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
	PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
	PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
	PluginCreatorPluginOptionsLayouts = 'pluginCreator___pluginOptions___layouts',
	PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
	PluginCreatorPluginOptionsLessBabel = 'pluginCreator___pluginOptions___lessBabel',
	PluginCreatorPluginOptionsMediaTypes = 'pluginCreator___pluginOptions___mediaTypes',
	PluginCreatorPluginOptionsMergeScriptHashes = 'pluginCreator___pluginOptions___mergeScriptHashes',
	PluginCreatorPluginOptionsMergeSecurityHeaders = 'pluginCreator___pluginOptions___mergeSecurityHeaders',
	PluginCreatorPluginOptionsMergeStyleHashes = 'pluginCreator___pluginOptions___mergeStyleHashes',
	PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
	PluginCreatorPluginOptionsOffset = 'pluginCreator___pluginOptions___offset',
	PluginCreatorPluginOptionsOptionsEmitWarning = 'pluginCreator___pluginOptions___options___emitWarning',
	PluginCreatorPluginOptionsOptionsFailOnError = 'pluginCreator___pluginOptions___options___failOnError',
	PluginCreatorPluginOptionsOptionsFix = 'pluginCreator___pluginOptions___options___fix',
	PluginCreatorPluginOptionsOutput = 'pluginCreator___pluginOptions___output',
	PluginCreatorPluginOptionsPages = 'pluginCreator___pluginOptions___pages',
	PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
	PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
	PluginCreatorPluginOptionsPluginConfigHead = 'pluginCreator___pluginOptions___pluginConfig___head',
	PluginCreatorPluginOptionsQuery = 'pluginCreator___pluginOptions___query',
	PluginCreatorPluginOptionsRoot = 'pluginCreator___pluginOptions___root',
	PluginCreatorPluginOptionsSiteUrl = 'pluginCreator___pluginOptions___siteUrl',
	PluginCreatorPluginOptionsStages = 'pluginCreator___pluginOptions___stages',
	PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
	PluginCreatorPluginOptionsStyles = 'pluginCreator___pluginOptions___styles',
	PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
	PluginCreatorPluginOptionsTimeout = 'pluginCreator___pluginOptions___timeout',
	PluginCreatorPluginOptionsTrackingIds = 'pluginCreator___pluginOptions___trackingIds',
	PluginCreatorPluginOptionsTypes = 'pluginCreator___pluginOptions___types',
	PluginCreatorResolve = 'pluginCreator___resolve',
	PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
	PluginCreatorVersion = 'pluginCreator___version',
}

export type SitePageFilterInput = {
	children?: Maybe<NodeFilterListInput>
	component?: Maybe<StringQueryOperatorInput>
	componentChunkName?: Maybe<StringQueryOperatorInput>
	context?: Maybe<SitePageContextFilterInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	internalComponentName?: Maybe<StringQueryOperatorInput>
	isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	path?: Maybe<StringQueryOperatorInput>
	pluginCreator?: Maybe<SitePluginFilterInput>
	pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
	__typename?: 'SitePageGroupConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SitePageEdge>
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
	group: Array<SitePageGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<SitePage>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SitePageGroupConnectionDistinctArgs = {
	field: SitePageFieldsEnum
}

export type SitePageGroupConnectionGroupArgs = {
	field: SitePageFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SitePageGroupConnectionMaxArgs = {
	field: SitePageFieldsEnum
}

export type SitePageGroupConnectionMinArgs = {
	field: SitePageFieldsEnum
}

export type SitePageGroupConnectionSumArgs = {
	field: SitePageFieldsEnum
}

export type SitePageSortInput = {
	fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
	__typename?: 'SitePlugin'
	browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
	children: Array<Node>
	id: Scalars['ID']
	internal: Internal
	name?: Maybe<Scalars['String']>
	nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
	packageJson?: Maybe<SitePluginPackageJson>
	parent?: Maybe<Node>
	pluginFilepath?: Maybe<Scalars['String']>
	pluginOptions?: Maybe<SitePluginPluginOptions>
	resolve?: Maybe<Scalars['String']>
	ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
	version?: Maybe<Scalars['String']>
}

export type SitePluginConnection = {
	__typename?: 'SitePluginConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SitePluginEdge>
	group: Array<SitePluginGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<SitePlugin>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SitePluginConnectionDistinctArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
	field: SitePluginFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SitePluginConnectionMaxArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginConnectionMinArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginConnectionSumArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
	__typename?: 'SitePluginEdge'
	next?: Maybe<SitePlugin>
	node: SitePlugin
	previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
	BrowserApIs = 'browserAPIs',
	Children = 'children',
	ChildrenChildren = 'children___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenId = 'children___id',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentParentId = 'children___parent___parent___id',
	Id = 'id',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	Name = 'name',
	NodeApIs = 'nodeAPIs',
	PackageJsonAuthor = 'packageJson___author',
	PackageJsonDependencies = 'packageJson___dependencies',
	PackageJsonDependenciesName = 'packageJson___dependencies___name',
	PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
	PackageJsonDescription = 'packageJson___description',
	PackageJsonDevDependencies = 'packageJson___devDependencies',
	PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
	PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
	PackageJsonKeywords = 'packageJson___keywords',
	PackageJsonLicense = 'packageJson___license',
	PackageJsonMain = 'packageJson___main',
	PackageJsonName = 'packageJson___name',
	PackageJsonPeerDependencies = 'packageJson___peerDependencies',
	PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
	PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
	PackageJsonVersion = 'packageJson___version',
	ParentChildren = 'parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentId = 'parent___id',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentId = 'parent___parent___id',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentParentId = 'parent___parent___parent___id',
	PluginFilepath = 'pluginFilepath',
	PluginOptions = 'pluginOptions____',
	PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
	PluginOptionsAssets = 'pluginOptions___assets',
	PluginOptionsBase64Width = 'pluginOptions___base64Width',
	PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
	PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
	PluginOptionsComponents = 'pluginOptions___components',
	PluginOptionsCreateLinkInHead = 'pluginOptions___createLinkInHead',
	PluginOptionsCrossOrigin = 'pluginOptions___crossOrigin',
	PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
	PluginOptionsDirectivesConnectSrc = 'pluginOptions___directives___connect_src',
	PluginOptionsDirectivesImgSrc = 'pluginOptions___directives___img_src',
	PluginOptionsDirectivesReportTo = 'pluginOptions___directives___report_to',
	PluginOptionsDirectivesScriptSrc = 'pluginOptions___directives___script_src',
	PluginOptionsDirectivesStyleSrc = 'pluginOptions___directives___style_src',
	PluginOptionsEndpoint = 'pluginOptions___endpoint',
	PluginOptionsEntryLimit = 'pluginOptions___entryLimit',
	PluginOptionsEnvBranchDeployPolicy = 'pluginOptions___env___branch_deploy___policy',
	PluginOptionsEnvDeployPreviewPolicy = 'pluginOptions___env___deploy_preview___policy',
	PluginOptionsEnvProductionPolicy = 'pluginOptions___env___production___policy',
	PluginOptionsEnvProductionSitemap = 'pluginOptions___env___production___sitemap',
	PluginOptionsExcludes = 'pluginOptions___excludes',
	PluginOptionsExtensions = 'pluginOptions___extensions',
	PluginOptionsFailOnError = 'pluginOptions___failOnError',
	PluginOptionsHeadersX = 'pluginOptions___headers____x',
	PluginOptionsHooks = 'pluginOptions___hooks',
	PluginOptionsIcon = 'pluginOptions___icon',
	PluginOptionsImages = 'pluginOptions___images',
	PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
	PluginOptionsIsTsx = 'pluginOptions___isTSX',
	PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
	PluginOptionsLayouts = 'pluginOptions___layouts',
	PluginOptionsLegacy = 'pluginOptions___legacy',
	PluginOptionsLessBabel = 'pluginOptions___lessBabel',
	PluginOptionsMediaTypes = 'pluginOptions___mediaTypes',
	PluginOptionsMergeScriptHashes = 'pluginOptions___mergeScriptHashes',
	PluginOptionsMergeSecurityHeaders = 'pluginOptions___mergeSecurityHeaders',
	PluginOptionsMergeStyleHashes = 'pluginOptions___mergeStyleHashes',
	PluginOptionsName = 'pluginOptions___name',
	PluginOptionsOffset = 'pluginOptions___offset',
	PluginOptionsOptionsEmitWarning = 'pluginOptions___options___emitWarning',
	PluginOptionsOptionsFailOnError = 'pluginOptions___options___failOnError',
	PluginOptionsOptionsFix = 'pluginOptions___options___fix',
	PluginOptionsOutput = 'pluginOptions___output',
	PluginOptionsPages = 'pluginOptions___pages',
	PluginOptionsPath = 'pluginOptions___path',
	PluginOptionsPathCheck = 'pluginOptions___pathCheck',
	PluginOptionsPluginConfigHead = 'pluginOptions___pluginConfig___head',
	PluginOptionsQuery = 'pluginOptions___query',
	PluginOptionsRoot = 'pluginOptions___root',
	PluginOptionsSiteUrl = 'pluginOptions___siteUrl',
	PluginOptionsStages = 'pluginOptions___stages',
	PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
	PluginOptionsStyles = 'pluginOptions___styles',
	PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
	PluginOptionsTimeout = 'pluginOptions___timeout',
	PluginOptionsTrackingIds = 'pluginOptions___trackingIds',
	PluginOptionsTypes = 'pluginOptions___types',
	Resolve = 'resolve',
	SsrApIs = 'ssrAPIs',
	Version = 'version',
}

export type SitePluginFilterInput = {
	browserAPIs?: Maybe<StringQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	name?: Maybe<StringQueryOperatorInput>
	nodeAPIs?: Maybe<StringQueryOperatorInput>
	packageJson?: Maybe<SitePluginPackageJsonFilterInput>
	parent?: Maybe<NodeFilterInput>
	pluginFilepath?: Maybe<StringQueryOperatorInput>
	pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
	resolve?: Maybe<StringQueryOperatorInput>
	ssrAPIs?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginGroupConnection = {
	__typename?: 'SitePluginGroupConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SitePluginEdge>
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
	group: Array<SitePluginGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<SitePlugin>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SitePluginGroupConnectionDistinctArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionGroupArgs = {
	field: SitePluginFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SitePluginGroupConnectionMaxArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionMinArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionSumArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginPackageJson = {
	__typename?: 'SitePluginPackageJson'
	author?: Maybe<Scalars['String']>
	dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
	description?: Maybe<Scalars['String']>
	devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
	keywords?: Maybe<Array<Maybe<Scalars['String']>>>
	license?: Maybe<Scalars['String']>
	main?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
	version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependencies = {
	__typename?: 'SitePluginPackageJsonDependencies'
	name?: Maybe<Scalars['String']>
	version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
	elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
	__typename?: 'SitePluginPackageJsonDevDependencies'
	name?: Maybe<Scalars['String']>
	version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
	elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
	author?: Maybe<StringQueryOperatorInput>
	dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
	description?: Maybe<StringQueryOperatorInput>
	devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
	keywords?: Maybe<StringQueryOperatorInput>
	license?: Maybe<StringQueryOperatorInput>
	main?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
	__typename?: 'SitePluginPackageJsonPeerDependencies'
	name?: Maybe<Scalars['String']>
	version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
	elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
	__typename?: 'SitePluginPluginOptions'
	_?: Maybe<Scalars['String']>
	allExtensions?: Maybe<Scalars['Boolean']>
	assets?: Maybe<Scalars['String']>
	base64Width?: Maybe<Scalars['Int']>
	cacheDigest?: Maybe<Scalars['String']>
	cache_busting_mode?: Maybe<Scalars['String']>
	components?: Maybe<Scalars['String']>
	createLinkInHead?: Maybe<Scalars['Boolean']>
	crossOrigin?: Maybe<Scalars['String']>
	defaultQuality?: Maybe<Scalars['Int']>
	directives?: Maybe<SitePluginPluginOptionsDirectives>
	endpoint?: Maybe<Scalars['String']>
	entryLimit?: Maybe<Scalars['Int']>
	env?: Maybe<SitePluginPluginOptionsEnv>
	excludes?: Maybe<Array<Maybe<Scalars['String']>>>
	extensions?: Maybe<Array<Maybe<Scalars['String']>>>
	failOnError?: Maybe<Scalars['Boolean']>
	headers?: Maybe<SitePluginPluginOptionsHeaders>
	hooks?: Maybe<Scalars['String']>
	icon?: Maybe<Scalars['String']>
	images?: Maybe<Scalars['String']>
	include_favicon?: Maybe<Scalars['Boolean']>
	isTSX?: Maybe<Scalars['Boolean']>
	jsxPragma?: Maybe<Scalars['String']>
	layouts?: Maybe<Scalars['String']>
	legacy?: Maybe<Scalars['Boolean']>
	lessBabel?: Maybe<Scalars['Boolean']>
	mediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>
	mergeScriptHashes?: Maybe<Scalars['Boolean']>
	mergeSecurityHeaders?: Maybe<Scalars['Boolean']>
	mergeStyleHashes?: Maybe<Scalars['Boolean']>
	name?: Maybe<Scalars['String']>
	offset?: Maybe<Scalars['Int']>
	options?: Maybe<SitePluginPluginOptionsOptions>
	output?: Maybe<Scalars['String']>
	pages?: Maybe<Scalars['String']>
	path?: Maybe<Scalars['String']>
	pathCheck?: Maybe<Scalars['Boolean']>
	pluginConfig?: Maybe<SitePluginPluginOptionsPluginConfig>
	query?: Maybe<Scalars['String']>
	root?: Maybe<Scalars['String']>
	siteUrl?: Maybe<Scalars['String']>
	stages?: Maybe<Array<Maybe<Scalars['String']>>>
	stripMetadata?: Maybe<Scalars['Boolean']>
	styles?: Maybe<Scalars['String']>
	theme_color_in_head?: Maybe<Scalars['Boolean']>
	timeout?: Maybe<Scalars['Int']>
	trackingIds?: Maybe<Array<Maybe<Scalars['String']>>>
	types?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsDirectives = {
	__typename?: 'SitePluginPluginOptionsDirectives'
	connect_src?: Maybe<Scalars['String']>
	img_src?: Maybe<Scalars['String']>
	report_to?: Maybe<Scalars['String']>
	script_src?: Maybe<Scalars['String']>
	style_src?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsDirectivesFilterInput = {
	connect_src?: Maybe<StringQueryOperatorInput>
	img_src?: Maybe<StringQueryOperatorInput>
	report_to?: Maybe<StringQueryOperatorInput>
	script_src?: Maybe<StringQueryOperatorInput>
	style_src?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsEnv = {
	__typename?: 'SitePluginPluginOptionsEnv'
	branch_deploy?: Maybe<SitePluginPluginOptionsEnvBranch_Deploy>
	deploy_preview?: Maybe<SitePluginPluginOptionsEnvDeploy_Preview>
	production?: Maybe<SitePluginPluginOptionsEnvProduction>
}

export type SitePluginPluginOptionsEnvBranch_Deploy = {
	__typename?: 'SitePluginPluginOptionsEnvBranch_deploy'
	policy?: Maybe<Array<Maybe<SitePluginPluginOptionsEnvBranch_DeployPolicy>>>
}

export type SitePluginPluginOptionsEnvBranch_DeployFilterInput = {
	policy?: Maybe<SitePluginPluginOptionsEnvBranch_DeployPolicyFilterListInput>
}

export type SitePluginPluginOptionsEnvBranch_DeployPolicy = {
	__typename?: 'SitePluginPluginOptionsEnvBranch_deployPolicy'
	disallow?: Maybe<Array<Maybe<Scalars['String']>>>
	userAgent?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsEnvBranch_DeployPolicyFilterInput = {
	disallow?: Maybe<StringQueryOperatorInput>
	userAgent?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsEnvBranch_DeployPolicyFilterListInput = {
	elemMatch?: Maybe<SitePluginPluginOptionsEnvBranch_DeployPolicyFilterInput>
}

export type SitePluginPluginOptionsEnvDeploy_Preview = {
	__typename?: 'SitePluginPluginOptionsEnvDeploy_preview'
	policy?: Maybe<Array<Maybe<SitePluginPluginOptionsEnvDeploy_PreviewPolicy>>>
}

export type SitePluginPluginOptionsEnvDeploy_PreviewFilterInput = {
	policy?: Maybe<SitePluginPluginOptionsEnvDeploy_PreviewPolicyFilterListInput>
}

export type SitePluginPluginOptionsEnvDeploy_PreviewPolicy = {
	__typename?: 'SitePluginPluginOptionsEnvDeploy_previewPolicy'
	disallow?: Maybe<Array<Maybe<Scalars['String']>>>
	userAgent?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsEnvDeploy_PreviewPolicyFilterInput = {
	disallow?: Maybe<StringQueryOperatorInput>
	userAgent?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsEnvDeploy_PreviewPolicyFilterListInput = {
	elemMatch?: Maybe<SitePluginPluginOptionsEnvDeploy_PreviewPolicyFilterInput>
}

export type SitePluginPluginOptionsEnvFilterInput = {
	branch_deploy?: Maybe<SitePluginPluginOptionsEnvBranch_DeployFilterInput>
	deploy_preview?: Maybe<SitePluginPluginOptionsEnvDeploy_PreviewFilterInput>
	production?: Maybe<SitePluginPluginOptionsEnvProductionFilterInput>
}

export type SitePluginPluginOptionsEnvProduction = {
	__typename?: 'SitePluginPluginOptionsEnvProduction'
	policy?: Maybe<Array<Maybe<SitePluginPluginOptionsEnvProductionPolicy>>>
	sitemap?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsEnvProductionFilterInput = {
	policy?: Maybe<SitePluginPluginOptionsEnvProductionPolicyFilterListInput>
	sitemap?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsEnvProductionPolicy = {
	__typename?: 'SitePluginPluginOptionsEnvProductionPolicy'
	userAgent?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsEnvProductionPolicyFilterInput = {
	userAgent?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsEnvProductionPolicyFilterListInput = {
	elemMatch?: Maybe<SitePluginPluginOptionsEnvProductionPolicyFilterInput>
}

export type SitePluginPluginOptionsFilterInput = {
	_?: Maybe<StringQueryOperatorInput>
	allExtensions?: Maybe<BooleanQueryOperatorInput>
	assets?: Maybe<StringQueryOperatorInput>
	base64Width?: Maybe<IntQueryOperatorInput>
	cacheDigest?: Maybe<StringQueryOperatorInput>
	cache_busting_mode?: Maybe<StringQueryOperatorInput>
	components?: Maybe<StringQueryOperatorInput>
	createLinkInHead?: Maybe<BooleanQueryOperatorInput>
	crossOrigin?: Maybe<StringQueryOperatorInput>
	defaultQuality?: Maybe<IntQueryOperatorInput>
	directives?: Maybe<SitePluginPluginOptionsDirectivesFilterInput>
	endpoint?: Maybe<StringQueryOperatorInput>
	entryLimit?: Maybe<IntQueryOperatorInput>
	env?: Maybe<SitePluginPluginOptionsEnvFilterInput>
	excludes?: Maybe<StringQueryOperatorInput>
	extensions?: Maybe<StringQueryOperatorInput>
	failOnError?: Maybe<BooleanQueryOperatorInput>
	headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>
	hooks?: Maybe<StringQueryOperatorInput>
	icon?: Maybe<StringQueryOperatorInput>
	images?: Maybe<StringQueryOperatorInput>
	include_favicon?: Maybe<BooleanQueryOperatorInput>
	isTSX?: Maybe<BooleanQueryOperatorInput>
	jsxPragma?: Maybe<StringQueryOperatorInput>
	layouts?: Maybe<StringQueryOperatorInput>
	legacy?: Maybe<BooleanQueryOperatorInput>
	lessBabel?: Maybe<BooleanQueryOperatorInput>
	mediaTypes?: Maybe<StringQueryOperatorInput>
	mergeScriptHashes?: Maybe<BooleanQueryOperatorInput>
	mergeSecurityHeaders?: Maybe<BooleanQueryOperatorInput>
	mergeStyleHashes?: Maybe<BooleanQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	offset?: Maybe<IntQueryOperatorInput>
	options?: Maybe<SitePluginPluginOptionsOptionsFilterInput>
	output?: Maybe<StringQueryOperatorInput>
	pages?: Maybe<StringQueryOperatorInput>
	path?: Maybe<StringQueryOperatorInput>
	pathCheck?: Maybe<BooleanQueryOperatorInput>
	pluginConfig?: Maybe<SitePluginPluginOptionsPluginConfigFilterInput>
	query?: Maybe<StringQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	siteUrl?: Maybe<StringQueryOperatorInput>
	stages?: Maybe<StringQueryOperatorInput>
	stripMetadata?: Maybe<BooleanQueryOperatorInput>
	styles?: Maybe<StringQueryOperatorInput>
	theme_color_in_head?: Maybe<BooleanQueryOperatorInput>
	timeout?: Maybe<IntQueryOperatorInput>
	trackingIds?: Maybe<StringQueryOperatorInput>
	types?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsHeaders = {
	__typename?: 'SitePluginPluginOptionsHeaders'
	_x?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPluginOptionsHeadersFilterInput = {
	_x?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsOptions = {
	__typename?: 'SitePluginPluginOptionsOptions'
	emitWarning?: Maybe<Scalars['Boolean']>
	failOnError?: Maybe<Scalars['Boolean']>
	fix?: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsOptionsFilterInput = {
	emitWarning?: Maybe<BooleanQueryOperatorInput>
	failOnError?: Maybe<BooleanQueryOperatorInput>
	fix?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginPluginOptionsPluginConfig = {
	__typename?: 'SitePluginPluginOptionsPluginConfig'
	head?: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsPluginConfigFilterInput = {
	head?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginSortInput = {
	fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
	__typename?: 'SiteSiteMetadata'
	author?: Maybe<SiteSiteMetadataAuthor>
	description?: Maybe<Scalars['String']>
	favicon?: Maybe<Scalars['String']>
	image?: Maybe<Scalars['String']>
	lastBuildDate?: Maybe<Scalars['Date']>
	ogLanguage?: Maybe<Scalars['String']>
	siteLanguage?: Maybe<Scalars['String']>
	siteLocale?: Maybe<Scalars['String']>
	siteUrl?: Maybe<Scalars['String']>
	social?: Maybe<SiteSiteMetadataSocial>
	title?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataLastBuildDateArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataAuthor = {
	__typename?: 'SiteSiteMetadataAuthor'
	name?: Maybe<Scalars['String']>
	summary?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataAuthorFilterInput = {
	name?: Maybe<StringQueryOperatorInput>
	summary?: Maybe<StringQueryOperatorInput>
}

export type SiteSiteMetadataFilterInput = {
	author?: Maybe<SiteSiteMetadataAuthorFilterInput>
	description?: Maybe<StringQueryOperatorInput>
	favicon?: Maybe<StringQueryOperatorInput>
	image?: Maybe<StringQueryOperatorInput>
	lastBuildDate?: Maybe<DateQueryOperatorInput>
	ogLanguage?: Maybe<StringQueryOperatorInput>
	siteLanguage?: Maybe<StringQueryOperatorInput>
	siteLocale?: Maybe<StringQueryOperatorInput>
	siteUrl?: Maybe<StringQueryOperatorInput>
	social?: Maybe<SiteSiteMetadataSocialFilterInput>
	title?: Maybe<StringQueryOperatorInput>
}

export type SiteSiteMetadataSocial = {
	__typename?: 'SiteSiteMetadataSocial'
	github?: Maybe<SiteSiteMetadataSocialGithub>
	linkedin?: Maybe<SiteSiteMetadataSocialLinkedin>
	twitter?: Maybe<SiteSiteMetadataSocialTwitter>
}

export type SiteSiteMetadataSocialFilterInput = {
	github?: Maybe<SiteSiteMetadataSocialGithubFilterInput>
	linkedin?: Maybe<SiteSiteMetadataSocialLinkedinFilterInput>
	twitter?: Maybe<SiteSiteMetadataSocialTwitterFilterInput>
}

export type SiteSiteMetadataSocialGithub = {
	__typename?: 'SiteSiteMetadataSocialGithub'
	url?: Maybe<Scalars['String']>
	username?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataSocialGithubFilterInput = {
	url?: Maybe<StringQueryOperatorInput>
	username?: Maybe<StringQueryOperatorInput>
}

export type SiteSiteMetadataSocialLinkedin = {
	__typename?: 'SiteSiteMetadataSocialLinkedin'
	url?: Maybe<Scalars['String']>
	username?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataSocialLinkedinFilterInput = {
	url?: Maybe<StringQueryOperatorInput>
	username?: Maybe<StringQueryOperatorInput>
}

export type SiteSiteMetadataSocialTwitter = {
	__typename?: 'SiteSiteMetadataSocialTwitter'
	handle?: Maybe<Scalars['String']>
	url?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataSocialTwitterFilterInput = {
	handle?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
	fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
	Asc = 'ASC',
	Desc = 'DESC',
}

export type StringQueryOperatorInput = {
	eq?: Maybe<Scalars['String']>
	glob?: Maybe<Scalars['String']>
	in?: Maybe<Array<Maybe<Scalars['String']>>>
	ne?: Maybe<Scalars['String']>
	nin?: Maybe<Array<Maybe<Scalars['String']>>>
	regex?: Maybe<Scalars['String']>
}

export type TransformOptions = {
	cropFocus?: Maybe<ImageCropFocus>
	duotone?: Maybe<DuotoneGradient>
	fit?: Maybe<ImageFit>
	grayscale?: Maybe<Scalars['Boolean']>
	rotate?: Maybe<Scalars['Int']>
	trim?: Maybe<Scalars['Float']>
}

export type WebPOptions = {
	quality?: Maybe<Scalars['Int']>
}

export type ThankYouImgQueryVariables = Exact<{ [key: string]: never }>

export type ThankYouImgQuery = {
	__typename?: 'Query'
	img?: Maybe<{
		__typename?: 'File'
		childImageSharp?: Maybe<{ __typename?: 'ImageSharp'; gatsbyImageData: any }>
	}>
}

export type SiteMetadataHookQueryVariables = Exact<{ [key: string]: never }>

export type SiteMetadataHookQuery = {
	__typename?: 'Query'
	site?: Maybe<{
		__typename?: 'Site'
		siteMetadata?: Maybe<{
			__typename?: 'SiteSiteMetadata'
			title?: Maybe<string>
			description?: Maybe<string>
			image?: Maybe<string>
			siteUrl?: Maybe<string>
			ogLanguage?: Maybe<string>
			siteLanguage?: Maybe<string>
			siteLocale?: Maybe<string>
			social?: Maybe<{
				__typename?: 'SiteSiteMetadataSocial'
				github?: Maybe<{
					__typename?: 'SiteSiteMetadataSocialGithub'
					username?: Maybe<string>
					url?: Maybe<string>
				}>
				linkedin?: Maybe<{
					__typename?: 'SiteSiteMetadataSocialLinkedin'
					url?: Maybe<string>
					username?: Maybe<string>
				}>
				twitter?: Maybe<{
					__typename?: 'SiteSiteMetadataSocialTwitter'
					handle?: Maybe<string>
					url?: Maybe<string>
				}>
			}>
			author?: Maybe<{
				__typename?: 'SiteSiteMetadataAuthor'
				name?: Maybe<string>
				summary?: Maybe<string>
			}>
		}>
	}>
}

export type BlogIndexQueryVariables = Exact<{ [key: string]: never }>

export type BlogIndexQuery = {
	__typename?: 'Query'
	allMdx: {
		__typename?: 'MdxConnection'
		nodes: Array<{
			__typename?: 'Mdx'
			id: string
			timeToRead?: Maybe<number>
			slug?: Maybe<string>
			frontmatter?: Maybe<{
				__typename?: 'Frontmatter'
				author?: Maybe<string>
				description?: Maybe<string>
				title?: Maybe<string>
				published?: Maybe<any>
			}>
		}>
	}
}

export type PostBySlugQueryVariables = Exact<{
	slug?: Maybe<Scalars['String']>
}>

export type PostBySlugQuery = {
	__typename?: 'Query'
	mdx?: Maybe<{
		__typename?: 'Mdx'
		id: string
		slug?: Maybe<string>
		body: string
		excerpt: string
		timeToRead?: Maybe<number>
		frontmatter?: Maybe<{
			__typename?: 'Frontmatter'
			author?: Maybe<string>
			title?: Maybe<string>
			description?: Maybe<string>
			published?: Maybe<any>
			updated?: Maybe<any>
			featuredImage?: Maybe<{
				__typename?: 'File'
				childImageSharp?: Maybe<{
					__typename?: 'ImageSharp'
					gatsbyImageData: any
				}>
			}>
			embeddedImagesLocal?: Maybe<
				Array<
					Maybe<{
						__typename?: 'File'
						childImageSharp?: Maybe<{
							__typename?: 'ImageSharp'
							gatsbyImageData: any
						}>
					}>
				>
			>
			embeddedImagesRemote?: Maybe<
				Array<
					Maybe<{
						__typename?: 'File'
						childImageSharp?: Maybe<{
							__typename?: 'ImageSharp'
							gatsbyImageData: any
						}>
					}>
				>
			>
		}>
	}>
}
