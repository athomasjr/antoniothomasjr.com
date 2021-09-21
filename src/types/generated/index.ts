export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]: Maybe<T[SubKey]> }
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
	quality?: Maybe<Scalars['Int']>
	lossless?: Maybe<Scalars['Boolean']>
	speed?: Maybe<Scalars['Int']>
}

export type BlurredOptions = {
	/** Width of the generated low-res preview. Default is 20px */
	width?: Maybe<Scalars['Int']>
	/** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
	toFormat?: Maybe<ImageFormat>
}

export type BooleanQueryOperatorInput = {
	eq?: Maybe<Scalars['Boolean']>
	ne?: Maybe<Scalars['Boolean']>
	in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
	nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type DateQueryOperatorInput = {
	eq?: Maybe<Scalars['Date']>
	ne?: Maybe<Scalars['Date']>
	gt?: Maybe<Scalars['Date']>
	gte?: Maybe<Scalars['Date']>
	lt?: Maybe<Scalars['Date']>
	lte?: Maybe<Scalars['Date']>
	in?: Maybe<Array<Maybe<Scalars['Date']>>>
	nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
	__typename?: 'Directory'
	sourceInstanceName: Scalars['String']
	absolutePath: Scalars['String']
	relativePath: Scalars['String']
	extension: Scalars['String']
	size: Scalars['Int']
	prettySize: Scalars['String']
	modifiedTime: Scalars['Date']
	accessTime: Scalars['Date']
	changeTime: Scalars['Date']
	birthTime: Scalars['Date']
	root: Scalars['String']
	dir: Scalars['String']
	base: Scalars['String']
	ext: Scalars['String']
	name: Scalars['String']
	relativeDirectory: Scalars['String']
	dev: Scalars['Int']
	mode: Scalars['Int']
	nlink: Scalars['Int']
	uid: Scalars['Int']
	gid: Scalars['Int']
	rdev: Scalars['Int']
	ino: Scalars['Float']
	atimeMs: Scalars['Float']
	mtimeMs: Scalars['Float']
	ctimeMs: Scalars['Float']
	atime: Scalars['Date']
	mtime: Scalars['Date']
	ctime: Scalars['Date']
	/** @deprecated Use `birthTime` instead */
	birthtime?: Maybe<Scalars['Date']>
	/** @deprecated Use `birthTime` instead */
	birthtimeMs?: Maybe<Scalars['Float']>
	blksize?: Maybe<Scalars['Int']>
	blocks?: Maybe<Scalars['Int']>
	id: Scalars['ID']
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type DirectoryModifiedTimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
	__typename?: 'DirectoryConnection'
	totalCount: Scalars['Int']
	edges: Array<DirectoryEdge>
	nodes: Array<Directory>
	pageInfo: PageInfo
	distinct: Array<Scalars['String']>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	sum?: Maybe<Scalars['Float']>
	group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
	field: DirectoryFieldsEnum
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

export type DirectoryConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
	field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
	__typename?: 'DirectoryEdge'
	next?: Maybe<Directory>
	node: Directory
	previous?: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
	SourceInstanceName = 'sourceInstanceName',
	AbsolutePath = 'absolutePath',
	RelativePath = 'relativePath',
	Extension = 'extension',
	Size = 'size',
	PrettySize = 'prettySize',
	ModifiedTime = 'modifiedTime',
	AccessTime = 'accessTime',
	ChangeTime = 'changeTime',
	BirthTime = 'birthTime',
	Root = 'root',
	Dir = 'dir',
	Base = 'base',
	Ext = 'ext',
	Name = 'name',
	RelativeDirectory = 'relativeDirectory',
	Dev = 'dev',
	Mode = 'mode',
	Nlink = 'nlink',
	Uid = 'uid',
	Gid = 'gid',
	Rdev = 'rdev',
	Ino = 'ino',
	AtimeMs = 'atimeMs',
	MtimeMs = 'mtimeMs',
	CtimeMs = 'ctimeMs',
	Atime = 'atime',
	Mtime = 'mtime',
	Ctime = 'ctime',
	Birthtime = 'birthtime',
	BirthtimeMs = 'birthtimeMs',
	Blksize = 'blksize',
	Blocks = 'blocks',
	Id = 'id',
	ParentId = 'parent___id',
	ParentParentId = 'parent___parent___id',
	ParentParentParentId = 'parent___parent___parent___id',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentChildren = 'parent___children',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	Children = 'children',
	ChildrenId = 'children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentParentId = 'children___parent___parent___id',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenChildren = 'children___children',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
}

export type DirectoryFilterInput = {
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	absolutePath?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	mode?: Maybe<IntQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	ctime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	blksize?: Maybe<IntQueryOperatorInput>
	blocks?: Maybe<IntQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type DirectoryGroupConnection = {
	__typename?: 'DirectoryGroupConnection'
	totalCount: Scalars['Int']
	edges: Array<DirectoryEdge>
	nodes: Array<Directory>
	pageInfo: PageInfo
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
}

export type DirectorySortInput = {
	fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type DuotoneGradient = {
	highlight: Scalars['String']
	shadow: Scalars['String']
	opacity?: Maybe<Scalars['Int']>
}

export type File = Node & {
	__typename?: 'File'
	sourceInstanceName: Scalars['String']
	absolutePath: Scalars['String']
	relativePath: Scalars['String']
	extension: Scalars['String']
	size: Scalars['Int']
	prettySize: Scalars['String']
	modifiedTime: Scalars['Date']
	accessTime: Scalars['Date']
	changeTime: Scalars['Date']
	birthTime: Scalars['Date']
	root: Scalars['String']
	dir: Scalars['String']
	base: Scalars['String']
	ext: Scalars['String']
	name: Scalars['String']
	relativeDirectory: Scalars['String']
	dev: Scalars['Int']
	mode: Scalars['Int']
	nlink: Scalars['Int']
	uid: Scalars['Int']
	gid: Scalars['Int']
	rdev: Scalars['Int']
	ino: Scalars['Float']
	atimeMs: Scalars['Float']
	mtimeMs: Scalars['Float']
	ctimeMs: Scalars['Float']
	atime: Scalars['Date']
	mtime: Scalars['Date']
	ctime: Scalars['Date']
	/** @deprecated Use `birthTime` instead */
	birthtime?: Maybe<Scalars['Date']>
	/** @deprecated Use `birthTime` instead */
	birthtimeMs?: Maybe<Scalars['Float']>
	blksize?: Maybe<Scalars['Int']>
	blocks?: Maybe<Scalars['Int']>
	url?: Maybe<Scalars['String']>
	/** Copy file to static directory and return public url to it */
	publicURL?: Maybe<Scalars['String']>
	/** Returns all children nodes filtered by type Mdx */
	childrenMdx?: Maybe<Array<Maybe<Mdx>>>
	/** Returns the first child node of type Mdx or null if there are no children of given type on this node */
	childMdx?: Maybe<Mdx>
	/** Returns all children nodes filtered by type ImageSharp */
	childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>
	/** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
	childImageSharp?: Maybe<ImageSharp>
	id: Scalars['ID']
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type FileModifiedTimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type FileConnection = {
	__typename?: 'FileConnection'
	totalCount: Scalars['Int']
	edges: Array<FileEdge>
	nodes: Array<File>
	pageInfo: PageInfo
	distinct: Array<Scalars['String']>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	sum?: Maybe<Scalars['Float']>
	group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
	field: FileFieldsEnum
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

export type FileConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
	field: FileFieldsEnum
}

export type FileEdge = {
	__typename?: 'FileEdge'
	next?: Maybe<File>
	node: File
	previous?: Maybe<File>
}

export enum FileFieldsEnum {
	SourceInstanceName = 'sourceInstanceName',
	AbsolutePath = 'absolutePath',
	RelativePath = 'relativePath',
	Extension = 'extension',
	Size = 'size',
	PrettySize = 'prettySize',
	ModifiedTime = 'modifiedTime',
	AccessTime = 'accessTime',
	ChangeTime = 'changeTime',
	BirthTime = 'birthTime',
	Root = 'root',
	Dir = 'dir',
	Base = 'base',
	Ext = 'ext',
	Name = 'name',
	RelativeDirectory = 'relativeDirectory',
	Dev = 'dev',
	Mode = 'mode',
	Nlink = 'nlink',
	Uid = 'uid',
	Gid = 'gid',
	Rdev = 'rdev',
	Ino = 'ino',
	AtimeMs = 'atimeMs',
	MtimeMs = 'mtimeMs',
	CtimeMs = 'ctimeMs',
	Atime = 'atime',
	Mtime = 'mtime',
	Ctime = 'ctime',
	Birthtime = 'birthtime',
	BirthtimeMs = 'birthtimeMs',
	Blksize = 'blksize',
	Blocks = 'blocks',
	Url = 'url',
	PublicUrl = 'publicURL',
	ChildrenMdx = 'childrenMdx',
	ChildrenMdxRawBody = 'childrenMdx___rawBody',
	ChildrenMdxFileAbsolutePath = 'childrenMdx___fileAbsolutePath',
	ChildrenMdxFrontmatterEmbeddedImagesRemote = 'childrenMdx___frontmatter___embeddedImagesRemote',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteSourceInstanceName = 'childrenMdx___frontmatter___embeddedImagesRemote___sourceInstanceName',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteAbsolutePath = 'childrenMdx___frontmatter___embeddedImagesRemote___absolutePath',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteRelativePath = 'childrenMdx___frontmatter___embeddedImagesRemote___relativePath',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteExtension = 'childrenMdx___frontmatter___embeddedImagesRemote___extension',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteSize = 'childrenMdx___frontmatter___embeddedImagesRemote___size',
	ChildrenMdxFrontmatterEmbeddedImagesRemotePrettySize = 'childrenMdx___frontmatter___embeddedImagesRemote___prettySize',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteModifiedTime = 'childrenMdx___frontmatter___embeddedImagesRemote___modifiedTime',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteAccessTime = 'childrenMdx___frontmatter___embeddedImagesRemote___accessTime',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteChangeTime = 'childrenMdx___frontmatter___embeddedImagesRemote___changeTime',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteBirthTime = 'childrenMdx___frontmatter___embeddedImagesRemote___birthTime',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteRoot = 'childrenMdx___frontmatter___embeddedImagesRemote___root',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteDir = 'childrenMdx___frontmatter___embeddedImagesRemote___dir',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteBase = 'childrenMdx___frontmatter___embeddedImagesRemote___base',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteExt = 'childrenMdx___frontmatter___embeddedImagesRemote___ext',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteName = 'childrenMdx___frontmatter___embeddedImagesRemote___name',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteRelativeDirectory = 'childrenMdx___frontmatter___embeddedImagesRemote___relativeDirectory',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteDev = 'childrenMdx___frontmatter___embeddedImagesRemote___dev',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteMode = 'childrenMdx___frontmatter___embeddedImagesRemote___mode',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteNlink = 'childrenMdx___frontmatter___embeddedImagesRemote___nlink',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteUid = 'childrenMdx___frontmatter___embeddedImagesRemote___uid',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteGid = 'childrenMdx___frontmatter___embeddedImagesRemote___gid',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteRdev = 'childrenMdx___frontmatter___embeddedImagesRemote___rdev',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteIno = 'childrenMdx___frontmatter___embeddedImagesRemote___ino',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteAtimeMs = 'childrenMdx___frontmatter___embeddedImagesRemote___atimeMs',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteMtimeMs = 'childrenMdx___frontmatter___embeddedImagesRemote___mtimeMs',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteCtimeMs = 'childrenMdx___frontmatter___embeddedImagesRemote___ctimeMs',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteAtime = 'childrenMdx___frontmatter___embeddedImagesRemote___atime',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteMtime = 'childrenMdx___frontmatter___embeddedImagesRemote___mtime',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteCtime = 'childrenMdx___frontmatter___embeddedImagesRemote___ctime',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteBirthtime = 'childrenMdx___frontmatter___embeddedImagesRemote___birthtime',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteBirthtimeMs = 'childrenMdx___frontmatter___embeddedImagesRemote___birthtimeMs',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteBlksize = 'childrenMdx___frontmatter___embeddedImagesRemote___blksize',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteBlocks = 'childrenMdx___frontmatter___embeddedImagesRemote___blocks',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteUrl = 'childrenMdx___frontmatter___embeddedImagesRemote___url',
	ChildrenMdxFrontmatterEmbeddedImagesRemotePublicUrl = 'childrenMdx___frontmatter___embeddedImagesRemote___publicURL',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteChildrenMdx = 'childrenMdx___frontmatter___embeddedImagesRemote___childrenMdx',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteChildrenImageSharp = 'childrenMdx___frontmatter___embeddedImagesRemote___childrenImageSharp',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteId = 'childrenMdx___frontmatter___embeddedImagesRemote___id',
	ChildrenMdxFrontmatterEmbeddedImagesRemoteChildren = 'childrenMdx___frontmatter___embeddedImagesRemote___children',
	ChildrenMdxFrontmatterEmbeddedImagesLocal = 'childrenMdx___frontmatter___embeddedImagesLocal',
	ChildrenMdxFrontmatterEmbeddedImagesLocalSourceInstanceName = 'childrenMdx___frontmatter___embeddedImagesLocal___sourceInstanceName',
	ChildrenMdxFrontmatterEmbeddedImagesLocalAbsolutePath = 'childrenMdx___frontmatter___embeddedImagesLocal___absolutePath',
	ChildrenMdxFrontmatterEmbeddedImagesLocalRelativePath = 'childrenMdx___frontmatter___embeddedImagesLocal___relativePath',
	ChildrenMdxFrontmatterEmbeddedImagesLocalExtension = 'childrenMdx___frontmatter___embeddedImagesLocal___extension',
	ChildrenMdxFrontmatterEmbeddedImagesLocalSize = 'childrenMdx___frontmatter___embeddedImagesLocal___size',
	ChildrenMdxFrontmatterEmbeddedImagesLocalPrettySize = 'childrenMdx___frontmatter___embeddedImagesLocal___prettySize',
	ChildrenMdxFrontmatterEmbeddedImagesLocalModifiedTime = 'childrenMdx___frontmatter___embeddedImagesLocal___modifiedTime',
	ChildrenMdxFrontmatterEmbeddedImagesLocalAccessTime = 'childrenMdx___frontmatter___embeddedImagesLocal___accessTime',
	ChildrenMdxFrontmatterEmbeddedImagesLocalChangeTime = 'childrenMdx___frontmatter___embeddedImagesLocal___changeTime',
	ChildrenMdxFrontmatterEmbeddedImagesLocalBirthTime = 'childrenMdx___frontmatter___embeddedImagesLocal___birthTime',
	ChildrenMdxFrontmatterEmbeddedImagesLocalRoot = 'childrenMdx___frontmatter___embeddedImagesLocal___root',
	ChildrenMdxFrontmatterEmbeddedImagesLocalDir = 'childrenMdx___frontmatter___embeddedImagesLocal___dir',
	ChildrenMdxFrontmatterEmbeddedImagesLocalBase = 'childrenMdx___frontmatter___embeddedImagesLocal___base',
	ChildrenMdxFrontmatterEmbeddedImagesLocalExt = 'childrenMdx___frontmatter___embeddedImagesLocal___ext',
	ChildrenMdxFrontmatterEmbeddedImagesLocalName = 'childrenMdx___frontmatter___embeddedImagesLocal___name',
	ChildrenMdxFrontmatterEmbeddedImagesLocalRelativeDirectory = 'childrenMdx___frontmatter___embeddedImagesLocal___relativeDirectory',
	ChildrenMdxFrontmatterEmbeddedImagesLocalDev = 'childrenMdx___frontmatter___embeddedImagesLocal___dev',
	ChildrenMdxFrontmatterEmbeddedImagesLocalMode = 'childrenMdx___frontmatter___embeddedImagesLocal___mode',
	ChildrenMdxFrontmatterEmbeddedImagesLocalNlink = 'childrenMdx___frontmatter___embeddedImagesLocal___nlink',
	ChildrenMdxFrontmatterEmbeddedImagesLocalUid = 'childrenMdx___frontmatter___embeddedImagesLocal___uid',
	ChildrenMdxFrontmatterEmbeddedImagesLocalGid = 'childrenMdx___frontmatter___embeddedImagesLocal___gid',
	ChildrenMdxFrontmatterEmbeddedImagesLocalRdev = 'childrenMdx___frontmatter___embeddedImagesLocal___rdev',
	ChildrenMdxFrontmatterEmbeddedImagesLocalIno = 'childrenMdx___frontmatter___embeddedImagesLocal___ino',
	ChildrenMdxFrontmatterEmbeddedImagesLocalAtimeMs = 'childrenMdx___frontmatter___embeddedImagesLocal___atimeMs',
	ChildrenMdxFrontmatterEmbeddedImagesLocalMtimeMs = 'childrenMdx___frontmatter___embeddedImagesLocal___mtimeMs',
	ChildrenMdxFrontmatterEmbeddedImagesLocalCtimeMs = 'childrenMdx___frontmatter___embeddedImagesLocal___ctimeMs',
	ChildrenMdxFrontmatterEmbeddedImagesLocalAtime = 'childrenMdx___frontmatter___embeddedImagesLocal___atime',
	ChildrenMdxFrontmatterEmbeddedImagesLocalMtime = 'childrenMdx___frontmatter___embeddedImagesLocal___mtime',
	ChildrenMdxFrontmatterEmbeddedImagesLocalCtime = 'childrenMdx___frontmatter___embeddedImagesLocal___ctime',
	ChildrenMdxFrontmatterEmbeddedImagesLocalBirthtime = 'childrenMdx___frontmatter___embeddedImagesLocal___birthtime',
	ChildrenMdxFrontmatterEmbeddedImagesLocalBirthtimeMs = 'childrenMdx___frontmatter___embeddedImagesLocal___birthtimeMs',
	ChildrenMdxFrontmatterEmbeddedImagesLocalBlksize = 'childrenMdx___frontmatter___embeddedImagesLocal___blksize',
	ChildrenMdxFrontmatterEmbeddedImagesLocalBlocks = 'childrenMdx___frontmatter___embeddedImagesLocal___blocks',
	ChildrenMdxFrontmatterEmbeddedImagesLocalUrl = 'childrenMdx___frontmatter___embeddedImagesLocal___url',
	ChildrenMdxFrontmatterEmbeddedImagesLocalPublicUrl = 'childrenMdx___frontmatter___embeddedImagesLocal___publicURL',
	ChildrenMdxFrontmatterEmbeddedImagesLocalChildrenMdx = 'childrenMdx___frontmatter___embeddedImagesLocal___childrenMdx',
	ChildrenMdxFrontmatterEmbeddedImagesLocalChildrenImageSharp = 'childrenMdx___frontmatter___embeddedImagesLocal___childrenImageSharp',
	ChildrenMdxFrontmatterEmbeddedImagesLocalId = 'childrenMdx___frontmatter___embeddedImagesLocal___id',
	ChildrenMdxFrontmatterEmbeddedImagesLocalChildren = 'childrenMdx___frontmatter___embeddedImagesLocal___children',
	ChildrenMdxFrontmatterTitle = 'childrenMdx___frontmatter___title',
	ChildrenMdxFrontmatterDescription = 'childrenMdx___frontmatter___description',
	ChildrenMdxFrontmatterFeatured = 'childrenMdx___frontmatter___featured',
	ChildrenMdxFrontmatterPublished = 'childrenMdx___frontmatter___published',
	ChildrenMdxFrontmatterUpdated = 'childrenMdx___frontmatter___updated',
	ChildrenMdxFrontmatterAuthor = 'childrenMdx___frontmatter___author',
	ChildrenMdxSlug = 'childrenMdx___slug',
	ChildrenMdxBody = 'childrenMdx___body',
	ChildrenMdxExcerpt = 'childrenMdx___excerpt',
	ChildrenMdxHeadings = 'childrenMdx___headings',
	ChildrenMdxHeadingsValue = 'childrenMdx___headings___value',
	ChildrenMdxHeadingsDepth = 'childrenMdx___headings___depth',
	ChildrenMdxHtml = 'childrenMdx___html',
	ChildrenMdxMdxAst = 'childrenMdx___mdxAST',
	ChildrenMdxTableOfContents = 'childrenMdx___tableOfContents',
	ChildrenMdxTimeToRead = 'childrenMdx___timeToRead',
	ChildrenMdxWordCountParagraphs = 'childrenMdx___wordCount___paragraphs',
	ChildrenMdxWordCountSentences = 'childrenMdx___wordCount___sentences',
	ChildrenMdxWordCountWords = 'childrenMdx___wordCount___words',
	ChildrenMdxGatsbyPath = 'childrenMdx___gatsbyPath',
	ChildrenMdxId = 'childrenMdx___id',
	ChildrenMdxParentId = 'childrenMdx___parent___id',
	ChildrenMdxParentParentId = 'childrenMdx___parent___parent___id',
	ChildrenMdxParentParentChildren = 'childrenMdx___parent___parent___children',
	ChildrenMdxParentChildren = 'childrenMdx___parent___children',
	ChildrenMdxParentChildrenId = 'childrenMdx___parent___children___id',
	ChildrenMdxParentChildrenChildren = 'childrenMdx___parent___children___children',
	ChildrenMdxParentInternalContent = 'childrenMdx___parent___internal___content',
	ChildrenMdxParentInternalContentDigest = 'childrenMdx___parent___internal___contentDigest',
	ChildrenMdxParentInternalDescription = 'childrenMdx___parent___internal___description',
	ChildrenMdxParentInternalFieldOwners = 'childrenMdx___parent___internal___fieldOwners',
	ChildrenMdxParentInternalIgnoreType = 'childrenMdx___parent___internal___ignoreType',
	ChildrenMdxParentInternalMediaType = 'childrenMdx___parent___internal___mediaType',
	ChildrenMdxParentInternalOwner = 'childrenMdx___parent___internal___owner',
	ChildrenMdxParentInternalType = 'childrenMdx___parent___internal___type',
	ChildrenMdxChildren = 'childrenMdx___children',
	ChildrenMdxChildrenId = 'childrenMdx___children___id',
	ChildrenMdxChildrenParentId = 'childrenMdx___children___parent___id',
	ChildrenMdxChildrenParentChildren = 'childrenMdx___children___parent___children',
	ChildrenMdxChildrenChildren = 'childrenMdx___children___children',
	ChildrenMdxChildrenChildrenId = 'childrenMdx___children___children___id',
	ChildrenMdxChildrenChildrenChildren = 'childrenMdx___children___children___children',
	ChildrenMdxChildrenInternalContent = 'childrenMdx___children___internal___content',
	ChildrenMdxChildrenInternalContentDigest = 'childrenMdx___children___internal___contentDigest',
	ChildrenMdxChildrenInternalDescription = 'childrenMdx___children___internal___description',
	ChildrenMdxChildrenInternalFieldOwners = 'childrenMdx___children___internal___fieldOwners',
	ChildrenMdxChildrenInternalIgnoreType = 'childrenMdx___children___internal___ignoreType',
	ChildrenMdxChildrenInternalMediaType = 'childrenMdx___children___internal___mediaType',
	ChildrenMdxChildrenInternalOwner = 'childrenMdx___children___internal___owner',
	ChildrenMdxChildrenInternalType = 'childrenMdx___children___internal___type',
	ChildrenMdxInternalContent = 'childrenMdx___internal___content',
	ChildrenMdxInternalContentDigest = 'childrenMdx___internal___contentDigest',
	ChildrenMdxInternalDescription = 'childrenMdx___internal___description',
	ChildrenMdxInternalFieldOwners = 'childrenMdx___internal___fieldOwners',
	ChildrenMdxInternalIgnoreType = 'childrenMdx___internal___ignoreType',
	ChildrenMdxInternalMediaType = 'childrenMdx___internal___mediaType',
	ChildrenMdxInternalOwner = 'childrenMdx___internal___owner',
	ChildrenMdxInternalType = 'childrenMdx___internal___type',
	ChildMdxRawBody = 'childMdx___rawBody',
	ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
	ChildMdxFrontmatterEmbeddedImagesRemote = 'childMdx___frontmatter___embeddedImagesRemote',
	ChildMdxFrontmatterEmbeddedImagesRemoteSourceInstanceName = 'childMdx___frontmatter___embeddedImagesRemote___sourceInstanceName',
	ChildMdxFrontmatterEmbeddedImagesRemoteAbsolutePath = 'childMdx___frontmatter___embeddedImagesRemote___absolutePath',
	ChildMdxFrontmatterEmbeddedImagesRemoteRelativePath = 'childMdx___frontmatter___embeddedImagesRemote___relativePath',
	ChildMdxFrontmatterEmbeddedImagesRemoteExtension = 'childMdx___frontmatter___embeddedImagesRemote___extension',
	ChildMdxFrontmatterEmbeddedImagesRemoteSize = 'childMdx___frontmatter___embeddedImagesRemote___size',
	ChildMdxFrontmatterEmbeddedImagesRemotePrettySize = 'childMdx___frontmatter___embeddedImagesRemote___prettySize',
	ChildMdxFrontmatterEmbeddedImagesRemoteModifiedTime = 'childMdx___frontmatter___embeddedImagesRemote___modifiedTime',
	ChildMdxFrontmatterEmbeddedImagesRemoteAccessTime = 'childMdx___frontmatter___embeddedImagesRemote___accessTime',
	ChildMdxFrontmatterEmbeddedImagesRemoteChangeTime = 'childMdx___frontmatter___embeddedImagesRemote___changeTime',
	ChildMdxFrontmatterEmbeddedImagesRemoteBirthTime = 'childMdx___frontmatter___embeddedImagesRemote___birthTime',
	ChildMdxFrontmatterEmbeddedImagesRemoteRoot = 'childMdx___frontmatter___embeddedImagesRemote___root',
	ChildMdxFrontmatterEmbeddedImagesRemoteDir = 'childMdx___frontmatter___embeddedImagesRemote___dir',
	ChildMdxFrontmatterEmbeddedImagesRemoteBase = 'childMdx___frontmatter___embeddedImagesRemote___base',
	ChildMdxFrontmatterEmbeddedImagesRemoteExt = 'childMdx___frontmatter___embeddedImagesRemote___ext',
	ChildMdxFrontmatterEmbeddedImagesRemoteName = 'childMdx___frontmatter___embeddedImagesRemote___name',
	ChildMdxFrontmatterEmbeddedImagesRemoteRelativeDirectory = 'childMdx___frontmatter___embeddedImagesRemote___relativeDirectory',
	ChildMdxFrontmatterEmbeddedImagesRemoteDev = 'childMdx___frontmatter___embeddedImagesRemote___dev',
	ChildMdxFrontmatterEmbeddedImagesRemoteMode = 'childMdx___frontmatter___embeddedImagesRemote___mode',
	ChildMdxFrontmatterEmbeddedImagesRemoteNlink = 'childMdx___frontmatter___embeddedImagesRemote___nlink',
	ChildMdxFrontmatterEmbeddedImagesRemoteUid = 'childMdx___frontmatter___embeddedImagesRemote___uid',
	ChildMdxFrontmatterEmbeddedImagesRemoteGid = 'childMdx___frontmatter___embeddedImagesRemote___gid',
	ChildMdxFrontmatterEmbeddedImagesRemoteRdev = 'childMdx___frontmatter___embeddedImagesRemote___rdev',
	ChildMdxFrontmatterEmbeddedImagesRemoteIno = 'childMdx___frontmatter___embeddedImagesRemote___ino',
	ChildMdxFrontmatterEmbeddedImagesRemoteAtimeMs = 'childMdx___frontmatter___embeddedImagesRemote___atimeMs',
	ChildMdxFrontmatterEmbeddedImagesRemoteMtimeMs = 'childMdx___frontmatter___embeddedImagesRemote___mtimeMs',
	ChildMdxFrontmatterEmbeddedImagesRemoteCtimeMs = 'childMdx___frontmatter___embeddedImagesRemote___ctimeMs',
	ChildMdxFrontmatterEmbeddedImagesRemoteAtime = 'childMdx___frontmatter___embeddedImagesRemote___atime',
	ChildMdxFrontmatterEmbeddedImagesRemoteMtime = 'childMdx___frontmatter___embeddedImagesRemote___mtime',
	ChildMdxFrontmatterEmbeddedImagesRemoteCtime = 'childMdx___frontmatter___embeddedImagesRemote___ctime',
	ChildMdxFrontmatterEmbeddedImagesRemoteBirthtime = 'childMdx___frontmatter___embeddedImagesRemote___birthtime',
	ChildMdxFrontmatterEmbeddedImagesRemoteBirthtimeMs = 'childMdx___frontmatter___embeddedImagesRemote___birthtimeMs',
	ChildMdxFrontmatterEmbeddedImagesRemoteBlksize = 'childMdx___frontmatter___embeddedImagesRemote___blksize',
	ChildMdxFrontmatterEmbeddedImagesRemoteBlocks = 'childMdx___frontmatter___embeddedImagesRemote___blocks',
	ChildMdxFrontmatterEmbeddedImagesRemoteUrl = 'childMdx___frontmatter___embeddedImagesRemote___url',
	ChildMdxFrontmatterEmbeddedImagesRemotePublicUrl = 'childMdx___frontmatter___embeddedImagesRemote___publicURL',
	ChildMdxFrontmatterEmbeddedImagesRemoteChildrenMdx = 'childMdx___frontmatter___embeddedImagesRemote___childrenMdx',
	ChildMdxFrontmatterEmbeddedImagesRemoteChildrenImageSharp = 'childMdx___frontmatter___embeddedImagesRemote___childrenImageSharp',
	ChildMdxFrontmatterEmbeddedImagesRemoteId = 'childMdx___frontmatter___embeddedImagesRemote___id',
	ChildMdxFrontmatterEmbeddedImagesRemoteChildren = 'childMdx___frontmatter___embeddedImagesRemote___children',
	ChildMdxFrontmatterEmbeddedImagesLocal = 'childMdx___frontmatter___embeddedImagesLocal',
	ChildMdxFrontmatterEmbeddedImagesLocalSourceInstanceName = 'childMdx___frontmatter___embeddedImagesLocal___sourceInstanceName',
	ChildMdxFrontmatterEmbeddedImagesLocalAbsolutePath = 'childMdx___frontmatter___embeddedImagesLocal___absolutePath',
	ChildMdxFrontmatterEmbeddedImagesLocalRelativePath = 'childMdx___frontmatter___embeddedImagesLocal___relativePath',
	ChildMdxFrontmatterEmbeddedImagesLocalExtension = 'childMdx___frontmatter___embeddedImagesLocal___extension',
	ChildMdxFrontmatterEmbeddedImagesLocalSize = 'childMdx___frontmatter___embeddedImagesLocal___size',
	ChildMdxFrontmatterEmbeddedImagesLocalPrettySize = 'childMdx___frontmatter___embeddedImagesLocal___prettySize',
	ChildMdxFrontmatterEmbeddedImagesLocalModifiedTime = 'childMdx___frontmatter___embeddedImagesLocal___modifiedTime',
	ChildMdxFrontmatterEmbeddedImagesLocalAccessTime = 'childMdx___frontmatter___embeddedImagesLocal___accessTime',
	ChildMdxFrontmatterEmbeddedImagesLocalChangeTime = 'childMdx___frontmatter___embeddedImagesLocal___changeTime',
	ChildMdxFrontmatterEmbeddedImagesLocalBirthTime = 'childMdx___frontmatter___embeddedImagesLocal___birthTime',
	ChildMdxFrontmatterEmbeddedImagesLocalRoot = 'childMdx___frontmatter___embeddedImagesLocal___root',
	ChildMdxFrontmatterEmbeddedImagesLocalDir = 'childMdx___frontmatter___embeddedImagesLocal___dir',
	ChildMdxFrontmatterEmbeddedImagesLocalBase = 'childMdx___frontmatter___embeddedImagesLocal___base',
	ChildMdxFrontmatterEmbeddedImagesLocalExt = 'childMdx___frontmatter___embeddedImagesLocal___ext',
	ChildMdxFrontmatterEmbeddedImagesLocalName = 'childMdx___frontmatter___embeddedImagesLocal___name',
	ChildMdxFrontmatterEmbeddedImagesLocalRelativeDirectory = 'childMdx___frontmatter___embeddedImagesLocal___relativeDirectory',
	ChildMdxFrontmatterEmbeddedImagesLocalDev = 'childMdx___frontmatter___embeddedImagesLocal___dev',
	ChildMdxFrontmatterEmbeddedImagesLocalMode = 'childMdx___frontmatter___embeddedImagesLocal___mode',
	ChildMdxFrontmatterEmbeddedImagesLocalNlink = 'childMdx___frontmatter___embeddedImagesLocal___nlink',
	ChildMdxFrontmatterEmbeddedImagesLocalUid = 'childMdx___frontmatter___embeddedImagesLocal___uid',
	ChildMdxFrontmatterEmbeddedImagesLocalGid = 'childMdx___frontmatter___embeddedImagesLocal___gid',
	ChildMdxFrontmatterEmbeddedImagesLocalRdev = 'childMdx___frontmatter___embeddedImagesLocal___rdev',
	ChildMdxFrontmatterEmbeddedImagesLocalIno = 'childMdx___frontmatter___embeddedImagesLocal___ino',
	ChildMdxFrontmatterEmbeddedImagesLocalAtimeMs = 'childMdx___frontmatter___embeddedImagesLocal___atimeMs',
	ChildMdxFrontmatterEmbeddedImagesLocalMtimeMs = 'childMdx___frontmatter___embeddedImagesLocal___mtimeMs',
	ChildMdxFrontmatterEmbeddedImagesLocalCtimeMs = 'childMdx___frontmatter___embeddedImagesLocal___ctimeMs',
	ChildMdxFrontmatterEmbeddedImagesLocalAtime = 'childMdx___frontmatter___embeddedImagesLocal___atime',
	ChildMdxFrontmatterEmbeddedImagesLocalMtime = 'childMdx___frontmatter___embeddedImagesLocal___mtime',
	ChildMdxFrontmatterEmbeddedImagesLocalCtime = 'childMdx___frontmatter___embeddedImagesLocal___ctime',
	ChildMdxFrontmatterEmbeddedImagesLocalBirthtime = 'childMdx___frontmatter___embeddedImagesLocal___birthtime',
	ChildMdxFrontmatterEmbeddedImagesLocalBirthtimeMs = 'childMdx___frontmatter___embeddedImagesLocal___birthtimeMs',
	ChildMdxFrontmatterEmbeddedImagesLocalBlksize = 'childMdx___frontmatter___embeddedImagesLocal___blksize',
	ChildMdxFrontmatterEmbeddedImagesLocalBlocks = 'childMdx___frontmatter___embeddedImagesLocal___blocks',
	ChildMdxFrontmatterEmbeddedImagesLocalUrl = 'childMdx___frontmatter___embeddedImagesLocal___url',
	ChildMdxFrontmatterEmbeddedImagesLocalPublicUrl = 'childMdx___frontmatter___embeddedImagesLocal___publicURL',
	ChildMdxFrontmatterEmbeddedImagesLocalChildrenMdx = 'childMdx___frontmatter___embeddedImagesLocal___childrenMdx',
	ChildMdxFrontmatterEmbeddedImagesLocalChildrenImageSharp = 'childMdx___frontmatter___embeddedImagesLocal___childrenImageSharp',
	ChildMdxFrontmatterEmbeddedImagesLocalId = 'childMdx___frontmatter___embeddedImagesLocal___id',
	ChildMdxFrontmatterEmbeddedImagesLocalChildren = 'childMdx___frontmatter___embeddedImagesLocal___children',
	ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
	ChildMdxFrontmatterDescription = 'childMdx___frontmatter___description',
	ChildMdxFrontmatterFeatured = 'childMdx___frontmatter___featured',
	ChildMdxFrontmatterPublished = 'childMdx___frontmatter___published',
	ChildMdxFrontmatterUpdated = 'childMdx___frontmatter___updated',
	ChildMdxFrontmatterAuthor = 'childMdx___frontmatter___author',
	ChildMdxSlug = 'childMdx___slug',
	ChildMdxBody = 'childMdx___body',
	ChildMdxExcerpt = 'childMdx___excerpt',
	ChildMdxHeadings = 'childMdx___headings',
	ChildMdxHeadingsValue = 'childMdx___headings___value',
	ChildMdxHeadingsDepth = 'childMdx___headings___depth',
	ChildMdxHtml = 'childMdx___html',
	ChildMdxMdxAst = 'childMdx___mdxAST',
	ChildMdxTableOfContents = 'childMdx___tableOfContents',
	ChildMdxTimeToRead = 'childMdx___timeToRead',
	ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
	ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
	ChildMdxWordCountWords = 'childMdx___wordCount___words',
	ChildMdxGatsbyPath = 'childMdx___gatsbyPath',
	ChildMdxId = 'childMdx___id',
	ChildMdxParentId = 'childMdx___parent___id',
	ChildMdxParentParentId = 'childMdx___parent___parent___id',
	ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
	ChildMdxParentChildren = 'childMdx___parent___children',
	ChildMdxParentChildrenId = 'childMdx___parent___children___id',
	ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
	ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
	ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
	ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
	ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
	ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
	ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
	ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
	ChildMdxParentInternalType = 'childMdx___parent___internal___type',
	ChildMdxChildren = 'childMdx___children',
	ChildMdxChildrenId = 'childMdx___children___id',
	ChildMdxChildrenParentId = 'childMdx___children___parent___id',
	ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
	ChildMdxChildrenChildren = 'childMdx___children___children',
	ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
	ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
	ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
	ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
	ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
	ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
	ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
	ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
	ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
	ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
	ChildMdxInternalContent = 'childMdx___internal___content',
	ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
	ChildMdxInternalDescription = 'childMdx___internal___description',
	ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
	ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
	ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
	ChildMdxInternalOwner = 'childMdx___internal___owner',
	ChildMdxInternalType = 'childMdx___internal___type',
	ChildrenImageSharp = 'childrenImageSharp',
	ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
	ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
	ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
	ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
	ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
	ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
	ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
	ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
	ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
	ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
	ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
	ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
	ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
	ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
	ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
	ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
	ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
	ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
	ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
	ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
	ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
	ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
	ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
	ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
	ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
	ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
	ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
	ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
	ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
	ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
	ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
	ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
	ChildrenImageSharpId = 'childrenImageSharp___id',
	ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
	ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
	ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
	ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
	ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
	ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
	ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
	ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
	ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
	ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
	ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
	ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
	ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
	ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
	ChildrenImageSharpChildren = 'childrenImageSharp___children',
	ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
	ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
	ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
	ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
	ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
	ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
	ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
	ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
	ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
	ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
	ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
	ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
	ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
	ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
	ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
	ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
	ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
	ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
	ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
	ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
	ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
	ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
	ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
	ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
	ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
	ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
	ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
	ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
	ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
	ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
	ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
	ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
	ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
	ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
	ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
	ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
	ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
	ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
	ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
	ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
	ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
	ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
	ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
	ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
	ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
	ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
	ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
	ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
	ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
	ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
	ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
	ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
	ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
	ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
	ChildImageSharpId = 'childImageSharp___id',
	ChildImageSharpParentId = 'childImageSharp___parent___id',
	ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
	ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
	ChildImageSharpParentChildren = 'childImageSharp___parent___children',
	ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
	ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
	ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
	ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
	ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
	ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
	ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
	ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
	ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
	ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
	ChildImageSharpChildren = 'childImageSharp___children',
	ChildImageSharpChildrenId = 'childImageSharp___children___id',
	ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
	ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
	ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
	ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
	ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
	ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
	ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
	ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
	ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
	ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
	ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
	ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
	ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
	ChildImageSharpInternalContent = 'childImageSharp___internal___content',
	ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
	ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
	ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
	ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
	ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
	ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
	ChildImageSharpInternalType = 'childImageSharp___internal___type',
	Id = 'id',
	ParentId = 'parent___id',
	ParentParentId = 'parent___parent___id',
	ParentParentParentId = 'parent___parent___parent___id',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentChildren = 'parent___children',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	Children = 'children',
	ChildrenId = 'children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentParentId = 'children___parent___parent___id',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenChildren = 'children___children',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
}

export type FileFilterInput = {
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	absolutePath?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	mode?: Maybe<IntQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	ctime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	blksize?: Maybe<IntQueryOperatorInput>
	blocks?: Maybe<IntQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
	publicURL?: Maybe<StringQueryOperatorInput>
	childrenMdx?: Maybe<MdxFilterListInput>
	childMdx?: Maybe<MdxFilterInput>
	childrenImageSharp?: Maybe<ImageSharpFilterListInput>
	childImageSharp?: Maybe<ImageSharpFilterInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type FileFilterListInput = {
	elemMatch?: Maybe<FileFilterInput>
}

export type FileGroupConnection = {
	__typename?: 'FileGroupConnection'
	totalCount: Scalars['Int']
	edges: Array<FileEdge>
	nodes: Array<File>
	pageInfo: PageInfo
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
}

export type FileSortInput = {
	fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
	eq?: Maybe<Scalars['Float']>
	ne?: Maybe<Scalars['Float']>
	gt?: Maybe<Scalars['Float']>
	gte?: Maybe<Scalars['Float']>
	lt?: Maybe<Scalars['Float']>
	lte?: Maybe<Scalars['Float']>
	in?: Maybe<Array<Maybe<Scalars['Float']>>>
	nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export type Frontmatter = {
	__typename?: 'Frontmatter'
	embeddedImagesRemote?: Maybe<Array<Maybe<File>>>
	embeddedImagesLocal?: Maybe<Array<Maybe<File>>>
	title?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	featured?: Maybe<Scalars['Boolean']>
	published?: Maybe<Scalars['Date']>
	updated?: Maybe<Scalars['Date']>
	author?: Maybe<Scalars['String']>
}

export type FrontmatterPublishedArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type FrontmatterUpdatedArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type FrontmatterFilterInput = {
	embeddedImagesRemote?: Maybe<FileFilterListInput>
	embeddedImagesLocal?: Maybe<FileFilterListInput>
	title?: Maybe<StringQueryOperatorInput>
	description?: Maybe<StringQueryOperatorInput>
	featured?: Maybe<BooleanQueryOperatorInput>
	published?: Maybe<DateQueryOperatorInput>
	updated?: Maybe<DateQueryOperatorInput>
	author?: Maybe<StringQueryOperatorInput>
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
	Center = 'CENTER',
	North = 'NORTH',
	Northeast = 'NORTHEAST',
	East = 'EAST',
	Southeast = 'SOUTHEAST',
	South = 'SOUTH',
	Southwest = 'SOUTHWEST',
	West = 'WEST',
	Northwest = 'NORTHWEST',
	Entropy = 'ENTROPY',
	Attention = 'ATTENTION',
}

export enum ImageFit {
	Cover = 'COVER',
	Contain = 'CONTAIN',
	Fill = 'FILL',
	Inside = 'INSIDE',
	Outside = 'OUTSIDE',
}

export enum ImageFormat {
	NoChange = 'NO_CHANGE',
	Auto = 'AUTO',
	Jpg = 'JPG',
	Png = 'PNG',
	Webp = 'WEBP',
	Avif = 'AVIF',
}

export enum ImageLayout {
	Fixed = 'FIXED',
	FullWidth = 'FULL_WIDTH',
	Constrained = 'CONSTRAINED',
}

export enum ImagePlaceholder {
	DominantColor = 'DOMINANT_COLOR',
	TracedSvg = 'TRACED_SVG',
	Blurred = 'BLURRED',
	None = 'NONE',
}

export type ImageSharp = Node & {
	__typename?: 'ImageSharp'
	fixed?: Maybe<ImageSharpFixed>
	fluid?: Maybe<ImageSharpFluid>
	gatsbyImageData: Scalars['JSON']
	original?: Maybe<ImageSharpOriginal>
	resize?: Maybe<ImageSharpResize>
	id: Scalars['ID']
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type ImageSharpFixedArgs = {
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	base64Width?: Maybe<Scalars['Int']>
	jpegProgressive?: Maybe<Scalars['Boolean']>
	pngCompressionSpeed?: Maybe<Scalars['Int']>
	grayscale?: Maybe<Scalars['Boolean']>
	duotone?: Maybe<DuotoneGradient>
	traceSVG?: Maybe<Potrace>
	quality?: Maybe<Scalars['Int']>
	jpegQuality?: Maybe<Scalars['Int']>
	pngQuality?: Maybe<Scalars['Int']>
	webpQuality?: Maybe<Scalars['Int']>
	toFormat?: Maybe<ImageFormat>
	toFormatBase64?: Maybe<ImageFormat>
	cropFocus?: Maybe<ImageCropFocus>
	fit?: Maybe<ImageFit>
	background?: Maybe<Scalars['String']>
	rotate?: Maybe<Scalars['Int']>
	trim?: Maybe<Scalars['Float']>
}

export type ImageSharpFluidArgs = {
	maxWidth?: Maybe<Scalars['Int']>
	maxHeight?: Maybe<Scalars['Int']>
	base64Width?: Maybe<Scalars['Int']>
	grayscale?: Maybe<Scalars['Boolean']>
	jpegProgressive?: Maybe<Scalars['Boolean']>
	pngCompressionSpeed?: Maybe<Scalars['Int']>
	duotone?: Maybe<DuotoneGradient>
	traceSVG?: Maybe<Potrace>
	quality?: Maybe<Scalars['Int']>
	jpegQuality?: Maybe<Scalars['Int']>
	pngQuality?: Maybe<Scalars['Int']>
	webpQuality?: Maybe<Scalars['Int']>
	toFormat?: Maybe<ImageFormat>
	toFormatBase64?: Maybe<ImageFormat>
	cropFocus?: Maybe<ImageCropFocus>
	fit?: Maybe<ImageFit>
	background?: Maybe<Scalars['String']>
	rotate?: Maybe<Scalars['Int']>
	trim?: Maybe<Scalars['Float']>
	sizes?: Maybe<Scalars['String']>
	srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpGatsbyImageDataArgs = {
	layout?: Maybe<ImageLayout>
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	aspectRatio?: Maybe<Scalars['Float']>
	placeholder?: Maybe<ImagePlaceholder>
	blurredOptions?: Maybe<BlurredOptions>
	tracedSVGOptions?: Maybe<Potrace>
	formats?: Maybe<Array<Maybe<ImageFormat>>>
	outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
	breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
	sizes?: Maybe<Scalars['String']>
	quality?: Maybe<Scalars['Int']>
	jpgOptions?: Maybe<JpgOptions>
	pngOptions?: Maybe<PngOptions>
	webpOptions?: Maybe<WebPOptions>
	avifOptions?: Maybe<AvifOptions>
	transformOptions?: Maybe<TransformOptions>
	backgroundColor?: Maybe<Scalars['String']>
}

export type ImageSharpResizeArgs = {
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	quality?: Maybe<Scalars['Int']>
	jpegQuality?: Maybe<Scalars['Int']>
	pngQuality?: Maybe<Scalars['Int']>
	webpQuality?: Maybe<Scalars['Int']>
	jpegProgressive?: Maybe<Scalars['Boolean']>
	pngCompressionLevel?: Maybe<Scalars['Int']>
	pngCompressionSpeed?: Maybe<Scalars['Int']>
	grayscale?: Maybe<Scalars['Boolean']>
	duotone?: Maybe<DuotoneGradient>
	base64?: Maybe<Scalars['Boolean']>
	traceSVG?: Maybe<Potrace>
	toFormat?: Maybe<ImageFormat>
	cropFocus?: Maybe<ImageCropFocus>
	fit?: Maybe<ImageFit>
	background?: Maybe<Scalars['String']>
	rotate?: Maybe<Scalars['Int']>
	trim?: Maybe<Scalars['Float']>
}

export type ImageSharpConnection = {
	__typename?: 'ImageSharpConnection'
	totalCount: Scalars['Int']
	edges: Array<ImageSharpEdge>
	nodes: Array<ImageSharp>
	pageInfo: PageInfo
	distinct: Array<Scalars['String']>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	sum?: Maybe<Scalars['Float']>
	group: Array<ImageSharpGroupConnection>
}

export type ImageSharpConnectionDistinctArgs = {
	field: ImageSharpFieldsEnum
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

export type ImageSharpConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
	field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
	__typename?: 'ImageSharpEdge'
	next?: Maybe<ImageSharp>
	node: ImageSharp
	previous?: Maybe<ImageSharp>
}

export enum ImageSharpFieldsEnum {
	FixedBase64 = 'fixed___base64',
	FixedTracedSvg = 'fixed___tracedSVG',
	FixedAspectRatio = 'fixed___aspectRatio',
	FixedWidth = 'fixed___width',
	FixedHeight = 'fixed___height',
	FixedSrc = 'fixed___src',
	FixedSrcSet = 'fixed___srcSet',
	FixedSrcWebp = 'fixed___srcWebp',
	FixedSrcSetWebp = 'fixed___srcSetWebp',
	FixedOriginalName = 'fixed___originalName',
	FluidBase64 = 'fluid___base64',
	FluidTracedSvg = 'fluid___tracedSVG',
	FluidAspectRatio = 'fluid___aspectRatio',
	FluidSrc = 'fluid___src',
	FluidSrcSet = 'fluid___srcSet',
	FluidSrcWebp = 'fluid___srcWebp',
	FluidSrcSetWebp = 'fluid___srcSetWebp',
	FluidSizes = 'fluid___sizes',
	FluidOriginalImg = 'fluid___originalImg',
	FluidOriginalName = 'fluid___originalName',
	FluidPresentationWidth = 'fluid___presentationWidth',
	FluidPresentationHeight = 'fluid___presentationHeight',
	GatsbyImageData = 'gatsbyImageData',
	OriginalWidth = 'original___width',
	OriginalHeight = 'original___height',
	OriginalSrc = 'original___src',
	ResizeSrc = 'resize___src',
	ResizeTracedSvg = 'resize___tracedSVG',
	ResizeWidth = 'resize___width',
	ResizeHeight = 'resize___height',
	ResizeAspectRatio = 'resize___aspectRatio',
	ResizeOriginalName = 'resize___originalName',
	Id = 'id',
	ParentId = 'parent___id',
	ParentParentId = 'parent___parent___id',
	ParentParentParentId = 'parent___parent___parent___id',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentChildren = 'parent___children',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	Children = 'children',
	ChildrenId = 'children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentParentId = 'children___parent___parent___id',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenChildren = 'children___children',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
}

export type ImageSharpFilterInput = {
	fixed?: Maybe<ImageSharpFixedFilterInput>
	fluid?: Maybe<ImageSharpFluidFilterInput>
	gatsbyImageData?: Maybe<JsonQueryOperatorInput>
	original?: Maybe<ImageSharpOriginalFilterInput>
	resize?: Maybe<ImageSharpResizeFilterInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type ImageSharpFilterListInput = {
	elemMatch?: Maybe<ImageSharpFilterInput>
}

export type ImageSharpFixed = {
	__typename?: 'ImageSharpFixed'
	base64?: Maybe<Scalars['String']>
	tracedSVG?: Maybe<Scalars['String']>
	aspectRatio?: Maybe<Scalars['Float']>
	width: Scalars['Float']
	height: Scalars['Float']
	src: Scalars['String']
	srcSet: Scalars['String']
	srcWebp?: Maybe<Scalars['String']>
	srcSetWebp?: Maybe<Scalars['String']>
	originalName?: Maybe<Scalars['String']>
}

export type ImageSharpFixedFilterInput = {
	base64?: Maybe<StringQueryOperatorInput>
	tracedSVG?: Maybe<StringQueryOperatorInput>
	aspectRatio?: Maybe<FloatQueryOperatorInput>
	width?: Maybe<FloatQueryOperatorInput>
	height?: Maybe<FloatQueryOperatorInput>
	src?: Maybe<StringQueryOperatorInput>
	srcSet?: Maybe<StringQueryOperatorInput>
	srcWebp?: Maybe<StringQueryOperatorInput>
	srcSetWebp?: Maybe<StringQueryOperatorInput>
	originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpFluid = {
	__typename?: 'ImageSharpFluid'
	base64?: Maybe<Scalars['String']>
	tracedSVG?: Maybe<Scalars['String']>
	aspectRatio: Scalars['Float']
	src: Scalars['String']
	srcSet: Scalars['String']
	srcWebp?: Maybe<Scalars['String']>
	srcSetWebp?: Maybe<Scalars['String']>
	sizes: Scalars['String']
	originalImg?: Maybe<Scalars['String']>
	originalName?: Maybe<Scalars['String']>
	presentationWidth: Scalars['Int']
	presentationHeight: Scalars['Int']
}

export type ImageSharpFluidFilterInput = {
	base64?: Maybe<StringQueryOperatorInput>
	tracedSVG?: Maybe<StringQueryOperatorInput>
	aspectRatio?: Maybe<FloatQueryOperatorInput>
	src?: Maybe<StringQueryOperatorInput>
	srcSet?: Maybe<StringQueryOperatorInput>
	srcWebp?: Maybe<StringQueryOperatorInput>
	srcSetWebp?: Maybe<StringQueryOperatorInput>
	sizes?: Maybe<StringQueryOperatorInput>
	originalImg?: Maybe<StringQueryOperatorInput>
	originalName?: Maybe<StringQueryOperatorInput>
	presentationWidth?: Maybe<IntQueryOperatorInput>
	presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpGroupConnection = {
	__typename?: 'ImageSharpGroupConnection'
	totalCount: Scalars['Int']
	edges: Array<ImageSharpEdge>
	nodes: Array<ImageSharp>
	pageInfo: PageInfo
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
}

export type ImageSharpOriginal = {
	__typename?: 'ImageSharpOriginal'
	width?: Maybe<Scalars['Float']>
	height?: Maybe<Scalars['Float']>
	src?: Maybe<Scalars['String']>
}

export type ImageSharpOriginalFilterInput = {
	width?: Maybe<FloatQueryOperatorInput>
	height?: Maybe<FloatQueryOperatorInput>
	src?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResize = {
	__typename?: 'ImageSharpResize'
	src?: Maybe<Scalars['String']>
	tracedSVG?: Maybe<Scalars['String']>
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	aspectRatio?: Maybe<Scalars['Float']>
	originalName?: Maybe<Scalars['String']>
}

export type ImageSharpResizeFilterInput = {
	src?: Maybe<StringQueryOperatorInput>
	tracedSVG?: Maybe<StringQueryOperatorInput>
	width?: Maybe<IntQueryOperatorInput>
	height?: Maybe<IntQueryOperatorInput>
	aspectRatio?: Maybe<FloatQueryOperatorInput>
	originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpSortInput = {
	fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type IntQueryOperatorInput = {
	eq?: Maybe<Scalars['Int']>
	ne?: Maybe<Scalars['Int']>
	gt?: Maybe<Scalars['Int']>
	gte?: Maybe<Scalars['Int']>
	lt?: Maybe<Scalars['Int']>
	lte?: Maybe<Scalars['Int']>
	in?: Maybe<Array<Maybe<Scalars['Int']>>>
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
	quality?: Maybe<Scalars['Int']>
	progressive?: Maybe<Scalars['Boolean']>
}

export type JsonQueryOperatorInput = {
	eq?: Maybe<Scalars['JSON']>
	ne?: Maybe<Scalars['JSON']>
	in?: Maybe<Array<Maybe<Scalars['JSON']>>>
	nin?: Maybe<Array<Maybe<Scalars['JSON']>>>
	regex?: Maybe<Scalars['JSON']>
	glob?: Maybe<Scalars['JSON']>
}

export type Mdx = Node & {
	__typename?: 'Mdx'
	rawBody: Scalars['String']
	fileAbsolutePath: Scalars['String']
	frontmatter?: Maybe<Frontmatter>
	slug?: Maybe<Scalars['String']>
	body: Scalars['String']
	excerpt: Scalars['String']
	headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>
	html?: Maybe<Scalars['String']>
	mdxAST?: Maybe<Scalars['JSON']>
	tableOfContents?: Maybe<Scalars['JSON']>
	timeToRead?: Maybe<Scalars['Int']>
	wordCount?: Maybe<MdxWordCount>
	gatsbyPath?: Maybe<Scalars['String']>
	id: Scalars['ID']
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type MdxExcerptArgs = {
	pruneLength?: Maybe<Scalars['Int']>
	truncate?: Maybe<Scalars['Boolean']>
}

export type MdxHeadingsArgs = {
	depth?: Maybe<HeadingsMdx>
}

export type MdxTableOfContentsArgs = {
	maxDepth?: Maybe<Scalars['Int']>
}

export type MdxGatsbyPathArgs = {
	filePath?: Maybe<Scalars['String']>
}

export type MdxConnection = {
	__typename?: 'MdxConnection'
	totalCount: Scalars['Int']
	edges: Array<MdxEdge>
	nodes: Array<Mdx>
	pageInfo: PageInfo
	distinct: Array<Scalars['String']>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	sum?: Maybe<Scalars['Float']>
	group: Array<MdxGroupConnection>
}

export type MdxConnectionDistinctArgs = {
	field: MdxFieldsEnum
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

export type MdxConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
	field: MdxFieldsEnum
}

export type MdxEdge = {
	__typename?: 'MdxEdge'
	next?: Maybe<Mdx>
	node: Mdx
	previous?: Maybe<Mdx>
}

export enum MdxFieldsEnum {
	RawBody = 'rawBody',
	FileAbsolutePath = 'fileAbsolutePath',
	FrontmatterEmbeddedImagesRemote = 'frontmatter___embeddedImagesRemote',
	FrontmatterEmbeddedImagesRemoteSourceInstanceName = 'frontmatter___embeddedImagesRemote___sourceInstanceName',
	FrontmatterEmbeddedImagesRemoteAbsolutePath = 'frontmatter___embeddedImagesRemote___absolutePath',
	FrontmatterEmbeddedImagesRemoteRelativePath = 'frontmatter___embeddedImagesRemote___relativePath',
	FrontmatterEmbeddedImagesRemoteExtension = 'frontmatter___embeddedImagesRemote___extension',
	FrontmatterEmbeddedImagesRemoteSize = 'frontmatter___embeddedImagesRemote___size',
	FrontmatterEmbeddedImagesRemotePrettySize = 'frontmatter___embeddedImagesRemote___prettySize',
	FrontmatterEmbeddedImagesRemoteModifiedTime = 'frontmatter___embeddedImagesRemote___modifiedTime',
	FrontmatterEmbeddedImagesRemoteAccessTime = 'frontmatter___embeddedImagesRemote___accessTime',
	FrontmatterEmbeddedImagesRemoteChangeTime = 'frontmatter___embeddedImagesRemote___changeTime',
	FrontmatterEmbeddedImagesRemoteBirthTime = 'frontmatter___embeddedImagesRemote___birthTime',
	FrontmatterEmbeddedImagesRemoteRoot = 'frontmatter___embeddedImagesRemote___root',
	FrontmatterEmbeddedImagesRemoteDir = 'frontmatter___embeddedImagesRemote___dir',
	FrontmatterEmbeddedImagesRemoteBase = 'frontmatter___embeddedImagesRemote___base',
	FrontmatterEmbeddedImagesRemoteExt = 'frontmatter___embeddedImagesRemote___ext',
	FrontmatterEmbeddedImagesRemoteName = 'frontmatter___embeddedImagesRemote___name',
	FrontmatterEmbeddedImagesRemoteRelativeDirectory = 'frontmatter___embeddedImagesRemote___relativeDirectory',
	FrontmatterEmbeddedImagesRemoteDev = 'frontmatter___embeddedImagesRemote___dev',
	FrontmatterEmbeddedImagesRemoteMode = 'frontmatter___embeddedImagesRemote___mode',
	FrontmatterEmbeddedImagesRemoteNlink = 'frontmatter___embeddedImagesRemote___nlink',
	FrontmatterEmbeddedImagesRemoteUid = 'frontmatter___embeddedImagesRemote___uid',
	FrontmatterEmbeddedImagesRemoteGid = 'frontmatter___embeddedImagesRemote___gid',
	FrontmatterEmbeddedImagesRemoteRdev = 'frontmatter___embeddedImagesRemote___rdev',
	FrontmatterEmbeddedImagesRemoteIno = 'frontmatter___embeddedImagesRemote___ino',
	FrontmatterEmbeddedImagesRemoteAtimeMs = 'frontmatter___embeddedImagesRemote___atimeMs',
	FrontmatterEmbeddedImagesRemoteMtimeMs = 'frontmatter___embeddedImagesRemote___mtimeMs',
	FrontmatterEmbeddedImagesRemoteCtimeMs = 'frontmatter___embeddedImagesRemote___ctimeMs',
	FrontmatterEmbeddedImagesRemoteAtime = 'frontmatter___embeddedImagesRemote___atime',
	FrontmatterEmbeddedImagesRemoteMtime = 'frontmatter___embeddedImagesRemote___mtime',
	FrontmatterEmbeddedImagesRemoteCtime = 'frontmatter___embeddedImagesRemote___ctime',
	FrontmatterEmbeddedImagesRemoteBirthtime = 'frontmatter___embeddedImagesRemote___birthtime',
	FrontmatterEmbeddedImagesRemoteBirthtimeMs = 'frontmatter___embeddedImagesRemote___birthtimeMs',
	FrontmatterEmbeddedImagesRemoteBlksize = 'frontmatter___embeddedImagesRemote___blksize',
	FrontmatterEmbeddedImagesRemoteBlocks = 'frontmatter___embeddedImagesRemote___blocks',
	FrontmatterEmbeddedImagesRemoteUrl = 'frontmatter___embeddedImagesRemote___url',
	FrontmatterEmbeddedImagesRemotePublicUrl = 'frontmatter___embeddedImagesRemote___publicURL',
	FrontmatterEmbeddedImagesRemoteChildrenMdx = 'frontmatter___embeddedImagesRemote___childrenMdx',
	FrontmatterEmbeddedImagesRemoteChildrenMdxRawBody = 'frontmatter___embeddedImagesRemote___childrenMdx___rawBody',
	FrontmatterEmbeddedImagesRemoteChildrenMdxFileAbsolutePath = 'frontmatter___embeddedImagesRemote___childrenMdx___fileAbsolutePath',
	FrontmatterEmbeddedImagesRemoteChildrenMdxSlug = 'frontmatter___embeddedImagesRemote___childrenMdx___slug',
	FrontmatterEmbeddedImagesRemoteChildrenMdxBody = 'frontmatter___embeddedImagesRemote___childrenMdx___body',
	FrontmatterEmbeddedImagesRemoteChildrenMdxExcerpt = 'frontmatter___embeddedImagesRemote___childrenMdx___excerpt',
	FrontmatterEmbeddedImagesRemoteChildrenMdxHeadings = 'frontmatter___embeddedImagesRemote___childrenMdx___headings',
	FrontmatterEmbeddedImagesRemoteChildrenMdxHtml = 'frontmatter___embeddedImagesRemote___childrenMdx___html',
	FrontmatterEmbeddedImagesRemoteChildrenMdxMdxAst = 'frontmatter___embeddedImagesRemote___childrenMdx___mdxAST',
	FrontmatterEmbeddedImagesRemoteChildrenMdxTableOfContents = 'frontmatter___embeddedImagesRemote___childrenMdx___tableOfContents',
	FrontmatterEmbeddedImagesRemoteChildrenMdxTimeToRead = 'frontmatter___embeddedImagesRemote___childrenMdx___timeToRead',
	FrontmatterEmbeddedImagesRemoteChildrenMdxGatsbyPath = 'frontmatter___embeddedImagesRemote___childrenMdx___gatsbyPath',
	FrontmatterEmbeddedImagesRemoteChildrenMdxId = 'frontmatter___embeddedImagesRemote___childrenMdx___id',
	FrontmatterEmbeddedImagesRemoteChildrenMdxChildren = 'frontmatter___embeddedImagesRemote___childrenMdx___children',
	FrontmatterEmbeddedImagesRemoteChildMdxRawBody = 'frontmatter___embeddedImagesRemote___childMdx___rawBody',
	FrontmatterEmbeddedImagesRemoteChildMdxFileAbsolutePath = 'frontmatter___embeddedImagesRemote___childMdx___fileAbsolutePath',
	FrontmatterEmbeddedImagesRemoteChildMdxSlug = 'frontmatter___embeddedImagesRemote___childMdx___slug',
	FrontmatterEmbeddedImagesRemoteChildMdxBody = 'frontmatter___embeddedImagesRemote___childMdx___body',
	FrontmatterEmbeddedImagesRemoteChildMdxExcerpt = 'frontmatter___embeddedImagesRemote___childMdx___excerpt',
	FrontmatterEmbeddedImagesRemoteChildMdxHeadings = 'frontmatter___embeddedImagesRemote___childMdx___headings',
	FrontmatterEmbeddedImagesRemoteChildMdxHtml = 'frontmatter___embeddedImagesRemote___childMdx___html',
	FrontmatterEmbeddedImagesRemoteChildMdxMdxAst = 'frontmatter___embeddedImagesRemote___childMdx___mdxAST',
	FrontmatterEmbeddedImagesRemoteChildMdxTableOfContents = 'frontmatter___embeddedImagesRemote___childMdx___tableOfContents',
	FrontmatterEmbeddedImagesRemoteChildMdxTimeToRead = 'frontmatter___embeddedImagesRemote___childMdx___timeToRead',
	FrontmatterEmbeddedImagesRemoteChildMdxGatsbyPath = 'frontmatter___embeddedImagesRemote___childMdx___gatsbyPath',
	FrontmatterEmbeddedImagesRemoteChildMdxId = 'frontmatter___embeddedImagesRemote___childMdx___id',
	FrontmatterEmbeddedImagesRemoteChildMdxChildren = 'frontmatter___embeddedImagesRemote___childMdx___children',
	FrontmatterEmbeddedImagesRemoteChildrenImageSharp = 'frontmatter___embeddedImagesRemote___childrenImageSharp',
	FrontmatterEmbeddedImagesRemoteChildrenImageSharpGatsbyImageData = 'frontmatter___embeddedImagesRemote___childrenImageSharp___gatsbyImageData',
	FrontmatterEmbeddedImagesRemoteChildrenImageSharpId = 'frontmatter___embeddedImagesRemote___childrenImageSharp___id',
	FrontmatterEmbeddedImagesRemoteChildrenImageSharpChildren = 'frontmatter___embeddedImagesRemote___childrenImageSharp___children',
	FrontmatterEmbeddedImagesRemoteChildImageSharpGatsbyImageData = 'frontmatter___embeddedImagesRemote___childImageSharp___gatsbyImageData',
	FrontmatterEmbeddedImagesRemoteChildImageSharpId = 'frontmatter___embeddedImagesRemote___childImageSharp___id',
	FrontmatterEmbeddedImagesRemoteChildImageSharpChildren = 'frontmatter___embeddedImagesRemote___childImageSharp___children',
	FrontmatterEmbeddedImagesRemoteId = 'frontmatter___embeddedImagesRemote___id',
	FrontmatterEmbeddedImagesRemoteParentId = 'frontmatter___embeddedImagesRemote___parent___id',
	FrontmatterEmbeddedImagesRemoteParentChildren = 'frontmatter___embeddedImagesRemote___parent___children',
	FrontmatterEmbeddedImagesRemoteChildren = 'frontmatter___embeddedImagesRemote___children',
	FrontmatterEmbeddedImagesRemoteChildrenId = 'frontmatter___embeddedImagesRemote___children___id',
	FrontmatterEmbeddedImagesRemoteChildrenChildren = 'frontmatter___embeddedImagesRemote___children___children',
	FrontmatterEmbeddedImagesRemoteInternalContent = 'frontmatter___embeddedImagesRemote___internal___content',
	FrontmatterEmbeddedImagesRemoteInternalContentDigest = 'frontmatter___embeddedImagesRemote___internal___contentDigest',
	FrontmatterEmbeddedImagesRemoteInternalDescription = 'frontmatter___embeddedImagesRemote___internal___description',
	FrontmatterEmbeddedImagesRemoteInternalFieldOwners = 'frontmatter___embeddedImagesRemote___internal___fieldOwners',
	FrontmatterEmbeddedImagesRemoteInternalIgnoreType = 'frontmatter___embeddedImagesRemote___internal___ignoreType',
	FrontmatterEmbeddedImagesRemoteInternalMediaType = 'frontmatter___embeddedImagesRemote___internal___mediaType',
	FrontmatterEmbeddedImagesRemoteInternalOwner = 'frontmatter___embeddedImagesRemote___internal___owner',
	FrontmatterEmbeddedImagesRemoteInternalType = 'frontmatter___embeddedImagesRemote___internal___type',
	FrontmatterEmbeddedImagesLocal = 'frontmatter___embeddedImagesLocal',
	FrontmatterEmbeddedImagesLocalSourceInstanceName = 'frontmatter___embeddedImagesLocal___sourceInstanceName',
	FrontmatterEmbeddedImagesLocalAbsolutePath = 'frontmatter___embeddedImagesLocal___absolutePath',
	FrontmatterEmbeddedImagesLocalRelativePath = 'frontmatter___embeddedImagesLocal___relativePath',
	FrontmatterEmbeddedImagesLocalExtension = 'frontmatter___embeddedImagesLocal___extension',
	FrontmatterEmbeddedImagesLocalSize = 'frontmatter___embeddedImagesLocal___size',
	FrontmatterEmbeddedImagesLocalPrettySize = 'frontmatter___embeddedImagesLocal___prettySize',
	FrontmatterEmbeddedImagesLocalModifiedTime = 'frontmatter___embeddedImagesLocal___modifiedTime',
	FrontmatterEmbeddedImagesLocalAccessTime = 'frontmatter___embeddedImagesLocal___accessTime',
	FrontmatterEmbeddedImagesLocalChangeTime = 'frontmatter___embeddedImagesLocal___changeTime',
	FrontmatterEmbeddedImagesLocalBirthTime = 'frontmatter___embeddedImagesLocal___birthTime',
	FrontmatterEmbeddedImagesLocalRoot = 'frontmatter___embeddedImagesLocal___root',
	FrontmatterEmbeddedImagesLocalDir = 'frontmatter___embeddedImagesLocal___dir',
	FrontmatterEmbeddedImagesLocalBase = 'frontmatter___embeddedImagesLocal___base',
	FrontmatterEmbeddedImagesLocalExt = 'frontmatter___embeddedImagesLocal___ext',
	FrontmatterEmbeddedImagesLocalName = 'frontmatter___embeddedImagesLocal___name',
	FrontmatterEmbeddedImagesLocalRelativeDirectory = 'frontmatter___embeddedImagesLocal___relativeDirectory',
	FrontmatterEmbeddedImagesLocalDev = 'frontmatter___embeddedImagesLocal___dev',
	FrontmatterEmbeddedImagesLocalMode = 'frontmatter___embeddedImagesLocal___mode',
	FrontmatterEmbeddedImagesLocalNlink = 'frontmatter___embeddedImagesLocal___nlink',
	FrontmatterEmbeddedImagesLocalUid = 'frontmatter___embeddedImagesLocal___uid',
	FrontmatterEmbeddedImagesLocalGid = 'frontmatter___embeddedImagesLocal___gid',
	FrontmatterEmbeddedImagesLocalRdev = 'frontmatter___embeddedImagesLocal___rdev',
	FrontmatterEmbeddedImagesLocalIno = 'frontmatter___embeddedImagesLocal___ino',
	FrontmatterEmbeddedImagesLocalAtimeMs = 'frontmatter___embeddedImagesLocal___atimeMs',
	FrontmatterEmbeddedImagesLocalMtimeMs = 'frontmatter___embeddedImagesLocal___mtimeMs',
	FrontmatterEmbeddedImagesLocalCtimeMs = 'frontmatter___embeddedImagesLocal___ctimeMs',
	FrontmatterEmbeddedImagesLocalAtime = 'frontmatter___embeddedImagesLocal___atime',
	FrontmatterEmbeddedImagesLocalMtime = 'frontmatter___embeddedImagesLocal___mtime',
	FrontmatterEmbeddedImagesLocalCtime = 'frontmatter___embeddedImagesLocal___ctime',
	FrontmatterEmbeddedImagesLocalBirthtime = 'frontmatter___embeddedImagesLocal___birthtime',
	FrontmatterEmbeddedImagesLocalBirthtimeMs = 'frontmatter___embeddedImagesLocal___birthtimeMs',
	FrontmatterEmbeddedImagesLocalBlksize = 'frontmatter___embeddedImagesLocal___blksize',
	FrontmatterEmbeddedImagesLocalBlocks = 'frontmatter___embeddedImagesLocal___blocks',
	FrontmatterEmbeddedImagesLocalUrl = 'frontmatter___embeddedImagesLocal___url',
	FrontmatterEmbeddedImagesLocalPublicUrl = 'frontmatter___embeddedImagesLocal___publicURL',
	FrontmatterEmbeddedImagesLocalChildrenMdx = 'frontmatter___embeddedImagesLocal___childrenMdx',
	FrontmatterEmbeddedImagesLocalChildrenMdxRawBody = 'frontmatter___embeddedImagesLocal___childrenMdx___rawBody',
	FrontmatterEmbeddedImagesLocalChildrenMdxFileAbsolutePath = 'frontmatter___embeddedImagesLocal___childrenMdx___fileAbsolutePath',
	FrontmatterEmbeddedImagesLocalChildrenMdxSlug = 'frontmatter___embeddedImagesLocal___childrenMdx___slug',
	FrontmatterEmbeddedImagesLocalChildrenMdxBody = 'frontmatter___embeddedImagesLocal___childrenMdx___body',
	FrontmatterEmbeddedImagesLocalChildrenMdxExcerpt = 'frontmatter___embeddedImagesLocal___childrenMdx___excerpt',
	FrontmatterEmbeddedImagesLocalChildrenMdxHeadings = 'frontmatter___embeddedImagesLocal___childrenMdx___headings',
	FrontmatterEmbeddedImagesLocalChildrenMdxHtml = 'frontmatter___embeddedImagesLocal___childrenMdx___html',
	FrontmatterEmbeddedImagesLocalChildrenMdxMdxAst = 'frontmatter___embeddedImagesLocal___childrenMdx___mdxAST',
	FrontmatterEmbeddedImagesLocalChildrenMdxTableOfContents = 'frontmatter___embeddedImagesLocal___childrenMdx___tableOfContents',
	FrontmatterEmbeddedImagesLocalChildrenMdxTimeToRead = 'frontmatter___embeddedImagesLocal___childrenMdx___timeToRead',
	FrontmatterEmbeddedImagesLocalChildrenMdxGatsbyPath = 'frontmatter___embeddedImagesLocal___childrenMdx___gatsbyPath',
	FrontmatterEmbeddedImagesLocalChildrenMdxId = 'frontmatter___embeddedImagesLocal___childrenMdx___id',
	FrontmatterEmbeddedImagesLocalChildrenMdxChildren = 'frontmatter___embeddedImagesLocal___childrenMdx___children',
	FrontmatterEmbeddedImagesLocalChildMdxRawBody = 'frontmatter___embeddedImagesLocal___childMdx___rawBody',
	FrontmatterEmbeddedImagesLocalChildMdxFileAbsolutePath = 'frontmatter___embeddedImagesLocal___childMdx___fileAbsolutePath',
	FrontmatterEmbeddedImagesLocalChildMdxSlug = 'frontmatter___embeddedImagesLocal___childMdx___slug',
	FrontmatterEmbeddedImagesLocalChildMdxBody = 'frontmatter___embeddedImagesLocal___childMdx___body',
	FrontmatterEmbeddedImagesLocalChildMdxExcerpt = 'frontmatter___embeddedImagesLocal___childMdx___excerpt',
	FrontmatterEmbeddedImagesLocalChildMdxHeadings = 'frontmatter___embeddedImagesLocal___childMdx___headings',
	FrontmatterEmbeddedImagesLocalChildMdxHtml = 'frontmatter___embeddedImagesLocal___childMdx___html',
	FrontmatterEmbeddedImagesLocalChildMdxMdxAst = 'frontmatter___embeddedImagesLocal___childMdx___mdxAST',
	FrontmatterEmbeddedImagesLocalChildMdxTableOfContents = 'frontmatter___embeddedImagesLocal___childMdx___tableOfContents',
	FrontmatterEmbeddedImagesLocalChildMdxTimeToRead = 'frontmatter___embeddedImagesLocal___childMdx___timeToRead',
	FrontmatterEmbeddedImagesLocalChildMdxGatsbyPath = 'frontmatter___embeddedImagesLocal___childMdx___gatsbyPath',
	FrontmatterEmbeddedImagesLocalChildMdxId = 'frontmatter___embeddedImagesLocal___childMdx___id',
	FrontmatterEmbeddedImagesLocalChildMdxChildren = 'frontmatter___embeddedImagesLocal___childMdx___children',
	FrontmatterEmbeddedImagesLocalChildrenImageSharp = 'frontmatter___embeddedImagesLocal___childrenImageSharp',
	FrontmatterEmbeddedImagesLocalChildrenImageSharpGatsbyImageData = 'frontmatter___embeddedImagesLocal___childrenImageSharp___gatsbyImageData',
	FrontmatterEmbeddedImagesLocalChildrenImageSharpId = 'frontmatter___embeddedImagesLocal___childrenImageSharp___id',
	FrontmatterEmbeddedImagesLocalChildrenImageSharpChildren = 'frontmatter___embeddedImagesLocal___childrenImageSharp___children',
	FrontmatterEmbeddedImagesLocalChildImageSharpGatsbyImageData = 'frontmatter___embeddedImagesLocal___childImageSharp___gatsbyImageData',
	FrontmatterEmbeddedImagesLocalChildImageSharpId = 'frontmatter___embeddedImagesLocal___childImageSharp___id',
	FrontmatterEmbeddedImagesLocalChildImageSharpChildren = 'frontmatter___embeddedImagesLocal___childImageSharp___children',
	FrontmatterEmbeddedImagesLocalId = 'frontmatter___embeddedImagesLocal___id',
	FrontmatterEmbeddedImagesLocalParentId = 'frontmatter___embeddedImagesLocal___parent___id',
	FrontmatterEmbeddedImagesLocalParentChildren = 'frontmatter___embeddedImagesLocal___parent___children',
	FrontmatterEmbeddedImagesLocalChildren = 'frontmatter___embeddedImagesLocal___children',
	FrontmatterEmbeddedImagesLocalChildrenId = 'frontmatter___embeddedImagesLocal___children___id',
	FrontmatterEmbeddedImagesLocalChildrenChildren = 'frontmatter___embeddedImagesLocal___children___children',
	FrontmatterEmbeddedImagesLocalInternalContent = 'frontmatter___embeddedImagesLocal___internal___content',
	FrontmatterEmbeddedImagesLocalInternalContentDigest = 'frontmatter___embeddedImagesLocal___internal___contentDigest',
	FrontmatterEmbeddedImagesLocalInternalDescription = 'frontmatter___embeddedImagesLocal___internal___description',
	FrontmatterEmbeddedImagesLocalInternalFieldOwners = 'frontmatter___embeddedImagesLocal___internal___fieldOwners',
	FrontmatterEmbeddedImagesLocalInternalIgnoreType = 'frontmatter___embeddedImagesLocal___internal___ignoreType',
	FrontmatterEmbeddedImagesLocalInternalMediaType = 'frontmatter___embeddedImagesLocal___internal___mediaType',
	FrontmatterEmbeddedImagesLocalInternalOwner = 'frontmatter___embeddedImagesLocal___internal___owner',
	FrontmatterEmbeddedImagesLocalInternalType = 'frontmatter___embeddedImagesLocal___internal___type',
	FrontmatterTitle = 'frontmatter___title',
	FrontmatterDescription = 'frontmatter___description',
	FrontmatterFeatured = 'frontmatter___featured',
	FrontmatterPublished = 'frontmatter___published',
	FrontmatterUpdated = 'frontmatter___updated',
	FrontmatterAuthor = 'frontmatter___author',
	Slug = 'slug',
	Body = 'body',
	Excerpt = 'excerpt',
	Headings = 'headings',
	HeadingsValue = 'headings___value',
	HeadingsDepth = 'headings___depth',
	Html = 'html',
	MdxAst = 'mdxAST',
	TableOfContents = 'tableOfContents',
	TimeToRead = 'timeToRead',
	WordCountParagraphs = 'wordCount___paragraphs',
	WordCountSentences = 'wordCount___sentences',
	WordCountWords = 'wordCount___words',
	GatsbyPath = 'gatsbyPath',
	Id = 'id',
	ParentId = 'parent___id',
	ParentParentId = 'parent___parent___id',
	ParentParentParentId = 'parent___parent___parent___id',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentChildren = 'parent___children',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	Children = 'children',
	ChildrenId = 'children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentParentId = 'children___parent___parent___id',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenChildren = 'children___children',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
}

export type MdxFilterInput = {
	rawBody?: Maybe<StringQueryOperatorInput>
	fileAbsolutePath?: Maybe<StringQueryOperatorInput>
	frontmatter?: Maybe<FrontmatterFilterInput>
	slug?: Maybe<StringQueryOperatorInput>
	body?: Maybe<StringQueryOperatorInput>
	excerpt?: Maybe<StringQueryOperatorInput>
	headings?: Maybe<MdxHeadingMdxFilterListInput>
	html?: Maybe<StringQueryOperatorInput>
	mdxAST?: Maybe<JsonQueryOperatorInput>
	tableOfContents?: Maybe<JsonQueryOperatorInput>
	timeToRead?: Maybe<IntQueryOperatorInput>
	wordCount?: Maybe<MdxWordCountFilterInput>
	gatsbyPath?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
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
	totalCount: Scalars['Int']
	edges: Array<MdxEdge>
	nodes: Array<Mdx>
	pageInfo: PageInfo
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
}

export type MdxHeadingMdx = {
	__typename?: 'MdxHeadingMdx'
	value?: Maybe<Scalars['String']>
	depth?: Maybe<Scalars['Int']>
}

export type MdxHeadingMdxFilterInput = {
	value?: Maybe<StringQueryOperatorInput>
	depth?: Maybe<IntQueryOperatorInput>
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
	id: Scalars['ID']
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type NodeFilterInput = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
	elemMatch?: Maybe<NodeFilterInput>
}

export type PngOptions = {
	quality?: Maybe<Scalars['Int']>
	compressionSpeed?: Maybe<Scalars['Int']>
}

export type PageInfo = {
	__typename?: 'PageInfo'
	currentPage: Scalars['Int']
	hasPreviousPage: Scalars['Boolean']
	hasNextPage: Scalars['Boolean']
	itemCount: Scalars['Int']
	pageCount: Scalars['Int']
	perPage?: Maybe<Scalars['Int']>
	totalCount: Scalars['Int']
}

export type Potrace = {
	turnPolicy?: Maybe<PotraceTurnPolicy>
	turdSize?: Maybe<Scalars['Float']>
	alphaMax?: Maybe<Scalars['Float']>
	optCurve?: Maybe<Scalars['Boolean']>
	optTolerance?: Maybe<Scalars['Float']>
	threshold?: Maybe<Scalars['Int']>
	blackOnWhite?: Maybe<Scalars['Boolean']>
	color?: Maybe<Scalars['String']>
	background?: Maybe<Scalars['String']>
}

export enum PotraceTurnPolicy {
	TurnpolicyBlack = 'TURNPOLICY_BLACK',
	TurnpolicyWhite = 'TURNPOLICY_WHITE',
	TurnpolicyLeft = 'TURNPOLICY_LEFT',
	TurnpolicyRight = 'TURNPOLICY_RIGHT',
	TurnpolicyMinority = 'TURNPOLICY_MINORITY',
	TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
}

export type Query = {
	__typename?: 'Query'
	file?: Maybe<File>
	allFile: FileConnection
	directory?: Maybe<Directory>
	allDirectory: DirectoryConnection
	site?: Maybe<Site>
	allSite: SiteConnection
	siteFunction?: Maybe<SiteFunction>
	allSiteFunction: SiteFunctionConnection
	sitePage?: Maybe<SitePage>
	allSitePage: SitePageConnection
	mdx?: Maybe<Mdx>
	allMdx: MdxConnection
	imageSharp?: Maybe<ImageSharp>
	allImageSharp: ImageSharpConnection
	sitePlugin?: Maybe<SitePlugin>
	allSitePlugin: SitePluginConnection
	siteBuildMetadata?: Maybe<SiteBuildMetadata>
	allSiteBuildMetadata: SiteBuildMetadataConnection
}

export type QueryFileArgs = {
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	absolutePath?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	mode?: Maybe<IntQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	ctime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	blksize?: Maybe<IntQueryOperatorInput>
	blocks?: Maybe<IntQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
	publicURL?: Maybe<StringQueryOperatorInput>
	childrenMdx?: Maybe<MdxFilterListInput>
	childMdx?: Maybe<MdxFilterInput>
	childrenImageSharp?: Maybe<ImageSharpFilterListInput>
	childImageSharp?: Maybe<ImageSharpFilterInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllFileArgs = {
	filter?: Maybe<FileFilterInput>
	sort?: Maybe<FileSortInput>
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	absolutePath?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	mode?: Maybe<IntQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	ctime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	blksize?: Maybe<IntQueryOperatorInput>
	blocks?: Maybe<IntQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
	filter?: Maybe<DirectoryFilterInput>
	sort?: Maybe<DirectorySortInput>
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
	buildTime?: Maybe<DateQueryOperatorInput>
	siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
	port?: Maybe<IntQueryOperatorInput>
	host?: Maybe<StringQueryOperatorInput>
	flags?: Maybe<SiteFlagsFilterInput>
	polyfill?: Maybe<BooleanQueryOperatorInput>
	pathPrefix?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
	filter?: Maybe<SiteFilterInput>
	sort?: Maybe<SiteSortInput>
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
}

export type QuerySiteFunctionArgs = {
	functionRoute?: Maybe<StringQueryOperatorInput>
	pluginName?: Maybe<StringQueryOperatorInput>
	originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
	originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
	relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
	absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteFunctionArgs = {
	filter?: Maybe<SiteFunctionFilterInput>
	sort?: Maybe<SiteFunctionSortInput>
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
	path?: Maybe<StringQueryOperatorInput>
	component?: Maybe<StringQueryOperatorInput>
	internalComponentName?: Maybe<StringQueryOperatorInput>
	componentChunkName?: Maybe<StringQueryOperatorInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
	context?: Maybe<SitePageContextFilterInput>
	pluginCreator?: Maybe<SitePluginFilterInput>
	pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
	filter?: Maybe<SitePageFilterInput>
	sort?: Maybe<SitePageSortInput>
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
}

export type QueryMdxArgs = {
	rawBody?: Maybe<StringQueryOperatorInput>
	fileAbsolutePath?: Maybe<StringQueryOperatorInput>
	frontmatter?: Maybe<FrontmatterFilterInput>
	slug?: Maybe<StringQueryOperatorInput>
	body?: Maybe<StringQueryOperatorInput>
	excerpt?: Maybe<StringQueryOperatorInput>
	headings?: Maybe<MdxHeadingMdxFilterListInput>
	html?: Maybe<StringQueryOperatorInput>
	mdxAST?: Maybe<JsonQueryOperatorInput>
	tableOfContents?: Maybe<JsonQueryOperatorInput>
	timeToRead?: Maybe<IntQueryOperatorInput>
	wordCount?: Maybe<MdxWordCountFilterInput>
	gatsbyPath?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllMdxArgs = {
	filter?: Maybe<MdxFilterInput>
	sort?: Maybe<MdxSortInput>
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
}

export type QueryImageSharpArgs = {
	fixed?: Maybe<ImageSharpFixedFilterInput>
	fluid?: Maybe<ImageSharpFluidFilterInput>
	gatsbyImageData?: Maybe<JsonQueryOperatorInput>
	original?: Maybe<ImageSharpOriginalFilterInput>
	resize?: Maybe<ImageSharpResizeFilterInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type QueryAllImageSharpArgs = {
	filter?: Maybe<ImageSharpFilterInput>
	sort?: Maybe<ImageSharpSortInput>
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	resolve?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
	pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
	nodeAPIs?: Maybe<StringQueryOperatorInput>
	browserAPIs?: Maybe<StringQueryOperatorInput>
	ssrAPIs?: Maybe<StringQueryOperatorInput>
	pluginFilepath?: Maybe<StringQueryOperatorInput>
	packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
	filter?: Maybe<SitePluginFilterInput>
	sort?: Maybe<SitePluginSortInput>
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
}

export type QuerySiteBuildMetadataArgs = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteBuildMetadataArgs = {
	filter?: Maybe<SiteBuildMetadataFilterInput>
	sort?: Maybe<SiteBuildMetadataSortInput>
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
}

export type Site = Node & {
	__typename?: 'Site'
	buildTime?: Maybe<Scalars['Date']>
	siteMetadata?: Maybe<SiteSiteMetadata>
	port?: Maybe<Scalars['Int']>
	host?: Maybe<Scalars['String']>
	flags?: Maybe<SiteFlags>
	polyfill?: Maybe<Scalars['Boolean']>
	pathPrefix?: Maybe<Scalars['String']>
	id: Scalars['ID']
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type SiteBuildTimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
	__typename?: 'SiteBuildMetadata'
	id: Scalars['ID']
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
	buildTime?: Maybe<Scalars['Date']>
}

export type SiteBuildMetadataBuildTimeArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
	locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
	__typename?: 'SiteBuildMetadataConnection'
	totalCount: Scalars['Int']
	edges: Array<SiteBuildMetadataEdge>
	nodes: Array<SiteBuildMetadata>
	pageInfo: PageInfo
	distinct: Array<Scalars['String']>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	sum?: Maybe<Scalars['Float']>
	group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
	field: SiteBuildMetadataFieldsEnum
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

export type SiteBuildMetadataConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
	__typename?: 'SiteBuildMetadataEdge'
	next?: Maybe<SiteBuildMetadata>
	node: SiteBuildMetadata
	previous?: Maybe<SiteBuildMetadata>
}

export enum SiteBuildMetadataFieldsEnum {
	Id = 'id',
	ParentId = 'parent___id',
	ParentParentId = 'parent___parent___id',
	ParentParentParentId = 'parent___parent___parent___id',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentChildren = 'parent___children',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	Children = 'children',
	ChildrenId = 'children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentParentId = 'children___parent___parent___id',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenChildren = 'children___children',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	BuildTime = 'buildTime',
}

export type SiteBuildMetadataFilterInput = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteBuildMetadataGroupConnection = {
	__typename?: 'SiteBuildMetadataGroupConnection'
	totalCount: Scalars['Int']
	edges: Array<SiteBuildMetadataEdge>
	nodes: Array<SiteBuildMetadata>
	pageInfo: PageInfo
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataSortInput = {
	fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteConnection = {
	__typename?: 'SiteConnection'
	totalCount: Scalars['Int']
	edges: Array<SiteEdge>
	nodes: Array<Site>
	pageInfo: PageInfo
	distinct: Array<Scalars['String']>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	sum?: Maybe<Scalars['Float']>
	group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
	field: SiteFieldsEnum
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

export type SiteConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
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
	SiteMetadataTitle = 'siteMetadata___title',
	SiteMetadataDescription = 'siteMetadata___description',
	SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
	SiteMetadataImage = 'siteMetadata___image',
	SiteMetadataOgLanguage = 'siteMetadata___ogLanguage',
	SiteMetadataSiteLanguage = 'siteMetadata___siteLanguage',
	SiteMetadataLastBuildDate = 'siteMetadata___lastBuildDate',
	SiteMetadataSiteLocale = 'siteMetadata___siteLocale',
	SiteMetadataAuthorName = 'siteMetadata___author___name',
	SiteMetadataAuthorSummary = 'siteMetadata___author___summary',
	SiteMetadataSocialTwitterHandle = 'siteMetadata___social___twitter___handle',
	SiteMetadataSocialTwitterUrl = 'siteMetadata___social___twitter___url',
	SiteMetadataSocialLinkedinUsername = 'siteMetadata___social___linkedin___username',
	SiteMetadataSocialLinkedinUrl = 'siteMetadata___social___linkedin___url',
	SiteMetadataSocialGithubUsername = 'siteMetadata___social___github___username',
	SiteMetadataSocialGithubUrl = 'siteMetadata___social___github___url',
	Port = 'port',
	Host = 'host',
	FlagsFastDev = 'flags___FAST_DEV',
	FlagsParallelSourcing = 'flags___PARALLEL_SOURCING',
	Polyfill = 'polyfill',
	PathPrefix = 'pathPrefix',
	Id = 'id',
	ParentId = 'parent___id',
	ParentParentId = 'parent___parent___id',
	ParentParentParentId = 'parent___parent___parent___id',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentChildren = 'parent___children',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	Children = 'children',
	ChildrenId = 'children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentParentId = 'children___parent___parent___id',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenChildren = 'children___children',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
}

export type SiteFilterInput = {
	buildTime?: Maybe<DateQueryOperatorInput>
	siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
	port?: Maybe<IntQueryOperatorInput>
	host?: Maybe<StringQueryOperatorInput>
	flags?: Maybe<SiteFlagsFilterInput>
	polyfill?: Maybe<BooleanQueryOperatorInput>
	pathPrefix?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
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
	functionRoute: Scalars['String']
	pluginName: Scalars['String']
	originalAbsoluteFilePath: Scalars['String']
	originalRelativeFilePath: Scalars['String']
	relativeCompiledFilePath: Scalars['String']
	absoluteCompiledFilePath: Scalars['String']
	matchPath?: Maybe<Scalars['String']>
	id: Scalars['ID']
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
}

export type SiteFunctionConnection = {
	__typename?: 'SiteFunctionConnection'
	totalCount: Scalars['Int']
	edges: Array<SiteFunctionEdge>
	nodes: Array<SiteFunction>
	pageInfo: PageInfo
	distinct: Array<Scalars['String']>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	sum?: Maybe<Scalars['Float']>
	group: Array<SiteFunctionGroupConnection>
}

export type SiteFunctionConnectionDistinctArgs = {
	field: SiteFunctionFieldsEnum
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

export type SiteFunctionConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionEdge = {
	__typename?: 'SiteFunctionEdge'
	next?: Maybe<SiteFunction>
	node: SiteFunction
	previous?: Maybe<SiteFunction>
}

export enum SiteFunctionFieldsEnum {
	FunctionRoute = 'functionRoute',
	PluginName = 'pluginName',
	OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
	OriginalRelativeFilePath = 'originalRelativeFilePath',
	RelativeCompiledFilePath = 'relativeCompiledFilePath',
	AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
	MatchPath = 'matchPath',
	Id = 'id',
	ParentId = 'parent___id',
	ParentParentId = 'parent___parent___id',
	ParentParentParentId = 'parent___parent___parent___id',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentChildren = 'parent___children',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	Children = 'children',
	ChildrenId = 'children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentParentId = 'children___parent___parent___id',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenChildren = 'children___children',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
}

export type SiteFunctionFilterInput = {
	functionRoute?: Maybe<StringQueryOperatorInput>
	pluginName?: Maybe<StringQueryOperatorInput>
	originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
	originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
	relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
	absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
}

export type SiteFunctionGroupConnection = {
	__typename?: 'SiteFunctionGroupConnection'
	totalCount: Scalars['Int']
	edges: Array<SiteFunctionEdge>
	nodes: Array<SiteFunction>
	pageInfo: PageInfo
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
}

export type SiteFunctionSortInput = {
	fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteGroupConnection = {
	__typename?: 'SiteGroupConnection'
	totalCount: Scalars['Int']
	edges: Array<SiteEdge>
	nodes: Array<Site>
	pageInfo: PageInfo
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
}

export type SitePage = Node & {
	__typename?: 'SitePage'
	path: Scalars['String']
	component: Scalars['String']
	internalComponentName: Scalars['String']
	componentChunkName: Scalars['String']
	matchPath?: Maybe<Scalars['String']>
	id: Scalars['ID']
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
	isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
	context?: Maybe<SitePageContext>
	pluginCreator?: Maybe<SitePlugin>
	pluginCreatorId?: Maybe<Scalars['String']>
}

export type SitePageConnection = {
	__typename?: 'SitePageConnection'
	totalCount: Scalars['Int']
	edges: Array<SitePageEdge>
	nodes: Array<SitePage>
	pageInfo: PageInfo
	distinct: Array<Scalars['String']>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	sum?: Maybe<Scalars['Float']>
	group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
	field: SitePageFieldsEnum
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

export type SitePageConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
	field: SitePageFieldsEnum
}

export type SitePageContext = {
	__typename?: 'SitePageContext'
	id?: Maybe<Scalars['String']>
	slug?: Maybe<Scalars['String']>
	_xparams?: Maybe<SitePageContext_Xparams>
}

export type SitePageContextFilterInput = {
	id?: Maybe<StringQueryOperatorInput>
	slug?: Maybe<StringQueryOperatorInput>
	_xparams?: Maybe<SitePageContext_XparamsFilterInput>
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
	Path = 'path',
	Component = 'component',
	InternalComponentName = 'internalComponentName',
	ComponentChunkName = 'componentChunkName',
	MatchPath = 'matchPath',
	Id = 'id',
	ParentId = 'parent___id',
	ParentParentId = 'parent___parent___id',
	ParentParentParentId = 'parent___parent___parent___id',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentChildren = 'parent___children',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	Children = 'children',
	ChildrenId = 'children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentParentId = 'children___parent___parent___id',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenChildren = 'children___children',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
	ContextId = 'context___id',
	ContextSlug = 'context___slug',
	ContextXparamsSlug = 'context____xparams___slug',
	PluginCreatorId = 'pluginCreator___id',
	PluginCreatorParentId = 'pluginCreator___parent___id',
	PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
	PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
	PluginCreatorParentChildren = 'pluginCreator___parent___children',
	PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
	PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
	PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
	PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
	PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
	PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
	PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
	PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
	PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
	PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
	PluginCreatorChildren = 'pluginCreator___children',
	PluginCreatorChildrenId = 'pluginCreator___children___id',
	PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
	PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
	PluginCreatorChildrenChildren = 'pluginCreator___children___children',
	PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
	PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
	PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
	PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
	PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
	PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
	PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
	PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
	PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
	PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
	PluginCreatorInternalContent = 'pluginCreator___internal___content',
	PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
	PluginCreatorInternalDescription = 'pluginCreator___internal___description',
	PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
	PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
	PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
	PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
	PluginCreatorInternalType = 'pluginCreator___internal___type',
	PluginCreatorResolve = 'pluginCreator___resolve',
	PluginCreatorName = 'pluginCreator___name',
	PluginCreatorVersion = 'pluginCreator___version',
	PluginCreatorPluginOptionsExcludes = 'pluginCreator___pluginOptions___excludes',
	PluginCreatorPluginOptionsOutput = 'pluginCreator___pluginOptions___output',
	PluginCreatorPluginOptionsCreateLinkInHead = 'pluginCreator___pluginOptions___createLinkInHead',
	PluginCreatorPluginOptionsEntryLimit = 'pluginCreator___pluginOptions___entryLimit',
	PluginCreatorPluginOptionsQuery = 'pluginCreator___pluginOptions___query',
	PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
	PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
	PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
	PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
	PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
	PluginCreatorPluginOptionsExtensions = 'pluginCreator___pluginOptions___extensions',
	PluginCreatorPluginOptionsLessBabel = 'pluginCreator___pluginOptions___lessBabel',
	PluginCreatorPluginOptionsMediaTypes = 'pluginCreator___pluginOptions___mediaTypes',
	PluginCreatorPluginOptionsRoot = 'pluginCreator___pluginOptions___root',
	PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
	PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
	PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
	PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
	PluginCreatorPluginOptions = 'pluginCreator___pluginOptions____',
	PluginCreatorPluginOptionsPages = 'pluginCreator___pluginOptions___pages',
	PluginCreatorPluginOptionsImages = 'pluginCreator___pluginOptions___images',
	PluginCreatorPluginOptionsAssets = 'pluginCreator___pluginOptions___assets',
	PluginCreatorPluginOptionsComponents = 'pluginCreator___pluginOptions___components',
	PluginCreatorPluginOptionsTypes = 'pluginCreator___pluginOptions___types',
	PluginCreatorPluginOptionsStyles = 'pluginCreator___pluginOptions___styles',
	PluginCreatorPluginOptionsHooks = 'pluginCreator___pluginOptions___hooks',
	PluginCreatorPluginOptionsStages = 'pluginCreator___pluginOptions___stages',
	PluginCreatorPluginOptionsOptionsEmitWarning = 'pluginCreator___pluginOptions___options___emitWarning',
	PluginCreatorPluginOptionsOptionsFailOnError = 'pluginCreator___pluginOptions___options___failOnError',
	PluginCreatorPluginOptionsOptionsFix = 'pluginCreator___pluginOptions___options___fix',
	PluginCreatorPluginOptionsOptionsExtensions = 'pluginCreator___pluginOptions___options___extensions',
	PluginCreatorPluginOptionsOptionsExclude = 'pluginCreator___pluginOptions___options___exclude',
	PluginCreatorPluginOptionsOffset = 'pluginCreator___pluginOptions___offset',
	PluginCreatorPluginOptionsSiteUrl = 'pluginCreator___pluginOptions___siteUrl',
	PluginCreatorPluginOptionsMergeScriptHashes = 'pluginCreator___pluginOptions___mergeScriptHashes',
	PluginCreatorPluginOptionsMergeStyleHashes = 'pluginCreator___pluginOptions___mergeStyleHashes',
	PluginCreatorPluginOptionsDirectivesScriptSrc = 'pluginCreator___pluginOptions___directives___script_src',
	PluginCreatorPluginOptionsDirectivesStyleSrc = 'pluginCreator___pluginOptions___directives___style_src',
	PluginCreatorPluginOptionsDirectivesImgSrc = 'pluginCreator___pluginOptions___directives___img_src',
	PluginCreatorPluginOptionsDirectivesReportUri = 'pluginCreator___pluginOptions___directives___report_uri',
	PluginCreatorPluginOptionsHeadersX = 'pluginCreator___pluginOptions___headers____x',
	PluginCreatorPluginOptionsMergeSecurityHeaders = 'pluginCreator___pluginOptions___mergeSecurityHeaders',
	PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
	PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
	PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
	PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
	PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
	PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
	PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
	PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
	PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
	PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
	PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
	PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
	PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
	PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
	PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
	PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
	PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
	PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
	PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
	PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
	PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
	PluginCreatorId = 'pluginCreatorId',
}

export type SitePageFilterInput = {
	path?: Maybe<StringQueryOperatorInput>
	component?: Maybe<StringQueryOperatorInput>
	internalComponentName?: Maybe<StringQueryOperatorInput>
	componentChunkName?: Maybe<StringQueryOperatorInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
	context?: Maybe<SitePageContextFilterInput>
	pluginCreator?: Maybe<SitePluginFilterInput>
	pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
	__typename?: 'SitePageGroupConnection'
	totalCount: Scalars['Int']
	edges: Array<SitePageEdge>
	nodes: Array<SitePage>
	pageInfo: PageInfo
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
}

export type SitePageSortInput = {
	fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
	__typename?: 'SitePlugin'
	id: Scalars['ID']
	parent?: Maybe<Node>
	children: Array<Node>
	internal: Internal
	resolve?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	version?: Maybe<Scalars['String']>
	pluginOptions?: Maybe<SitePluginPluginOptions>
	nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
	browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
	ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
	pluginFilepath?: Maybe<Scalars['String']>
	packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
	__typename?: 'SitePluginConnection'
	totalCount: Scalars['Int']
	edges: Array<SitePluginEdge>
	nodes: Array<SitePlugin>
	pageInfo: PageInfo
	distinct: Array<Scalars['String']>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	sum?: Maybe<Scalars['Float']>
	group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
	field: SitePluginFieldsEnum
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

export type SitePluginConnectionGroupArgs = {
	skip?: Maybe<Scalars['Int']>
	limit?: Maybe<Scalars['Int']>
	field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
	__typename?: 'SitePluginEdge'
	next?: Maybe<SitePlugin>
	node: SitePlugin
	previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
	Id = 'id',
	ParentId = 'parent___id',
	ParentParentId = 'parent___parent___id',
	ParentParentParentId = 'parent___parent___parent___id',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentChildren = 'parent___children',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	Children = 'children',
	ChildrenId = 'children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentParentId = 'children___parent___parent___id',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenChildren = 'children___children',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	Resolve = 'resolve',
	Name = 'name',
	Version = 'version',
	PluginOptionsExcludes = 'pluginOptions___excludes',
	PluginOptionsOutput = 'pluginOptions___output',
	PluginOptionsCreateLinkInHead = 'pluginOptions___createLinkInHead',
	PluginOptionsEntryLimit = 'pluginOptions___entryLimit',
	PluginOptionsQuery = 'pluginOptions___query',
	PluginOptionsEnvProductionPolicy = 'pluginOptions___env___production___policy',
	PluginOptionsEnvProductionSitemap = 'pluginOptions___env___production___sitemap',
	PluginOptionsEnvBranchDeployPolicy = 'pluginOptions___env___branch_deploy___policy',
	PluginOptionsEnvDeployPreviewPolicy = 'pluginOptions___env___deploy_preview___policy',
	PluginOptionsIsTsx = 'pluginOptions___isTSX',
	PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
	PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
	PluginOptionsName = 'pluginOptions___name',
	PluginOptionsPath = 'pluginOptions___path',
	PluginOptionsExtensions = 'pluginOptions___extensions',
	PluginOptionsLessBabel = 'pluginOptions___lessBabel',
	PluginOptionsMediaTypes = 'pluginOptions___mediaTypes',
	PluginOptionsRoot = 'pluginOptions___root',
	PluginOptionsBase64Width = 'pluginOptions___base64Width',
	PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
	PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
	PluginOptionsFailOnError = 'pluginOptions___failOnError',
	PluginOptions = 'pluginOptions____',
	PluginOptionsPages = 'pluginOptions___pages',
	PluginOptionsImages = 'pluginOptions___images',
	PluginOptionsAssets = 'pluginOptions___assets',
	PluginOptionsComponents = 'pluginOptions___components',
	PluginOptionsTypes = 'pluginOptions___types',
	PluginOptionsStyles = 'pluginOptions___styles',
	PluginOptionsHooks = 'pluginOptions___hooks',
	PluginOptionsStages = 'pluginOptions___stages',
	PluginOptionsOptionsEmitWarning = 'pluginOptions___options___emitWarning',
	PluginOptionsOptionsFailOnError = 'pluginOptions___options___failOnError',
	PluginOptionsOptionsFix = 'pluginOptions___options___fix',
	PluginOptionsOptionsExtensions = 'pluginOptions___options___extensions',
	PluginOptionsOptionsExclude = 'pluginOptions___options___exclude',
	PluginOptionsOffset = 'pluginOptions___offset',
	PluginOptionsSiteUrl = 'pluginOptions___siteUrl',
	PluginOptionsMergeScriptHashes = 'pluginOptions___mergeScriptHashes',
	PluginOptionsMergeStyleHashes = 'pluginOptions___mergeStyleHashes',
	PluginOptionsDirectivesScriptSrc = 'pluginOptions___directives___script_src',
	PluginOptionsDirectivesStyleSrc = 'pluginOptions___directives___style_src',
	PluginOptionsDirectivesImgSrc = 'pluginOptions___directives___img_src',
	PluginOptionsDirectivesReportUri = 'pluginOptions___directives___report_uri',
	PluginOptionsHeadersX = 'pluginOptions___headers____x',
	PluginOptionsMergeSecurityHeaders = 'pluginOptions___mergeSecurityHeaders',
	PluginOptionsPathCheck = 'pluginOptions___pathCheck',
	NodeApIs = 'nodeAPIs',
	BrowserApIs = 'browserAPIs',
	SsrApIs = 'ssrAPIs',
	PluginFilepath = 'pluginFilepath',
	PackageJsonName = 'packageJson___name',
	PackageJsonDescription = 'packageJson___description',
	PackageJsonVersion = 'packageJson___version',
	PackageJsonMain = 'packageJson___main',
	PackageJsonAuthor = 'packageJson___author',
	PackageJsonLicense = 'packageJson___license',
	PackageJsonDependencies = 'packageJson___dependencies',
	PackageJsonDependenciesName = 'packageJson___dependencies___name',
	PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
	PackageJsonDevDependencies = 'packageJson___devDependencies',
	PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
	PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
	PackageJsonPeerDependencies = 'packageJson___peerDependencies',
	PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
	PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
	PackageJsonKeywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
	id?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	children?: Maybe<NodeFilterListInput>
	internal?: Maybe<InternalFilterInput>
	resolve?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
	pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
	nodeAPIs?: Maybe<StringQueryOperatorInput>
	browserAPIs?: Maybe<StringQueryOperatorInput>
	ssrAPIs?: Maybe<StringQueryOperatorInput>
	pluginFilepath?: Maybe<StringQueryOperatorInput>
	packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
	__typename?: 'SitePluginGroupConnection'
	totalCount: Scalars['Int']
	edges: Array<SitePluginEdge>
	nodes: Array<SitePlugin>
	pageInfo: PageInfo
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
	__typename?: 'SitePluginPackageJson'
	name?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	version?: Maybe<Scalars['String']>
	main?: Maybe<Scalars['String']>
	author?: Maybe<Scalars['String']>
	license?: Maybe<Scalars['String']>
	dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
	devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
	peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
	keywords?: Maybe<Array<Maybe<Scalars['String']>>>
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
	name?: Maybe<StringQueryOperatorInput>
	description?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
	main?: Maybe<StringQueryOperatorInput>
	author?: Maybe<StringQueryOperatorInput>
	license?: Maybe<StringQueryOperatorInput>
	dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
	devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
	peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
	keywords?: Maybe<StringQueryOperatorInput>
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
	excludes?: Maybe<Array<Maybe<Scalars['String']>>>
	output?: Maybe<Scalars['String']>
	createLinkInHead?: Maybe<Scalars['Boolean']>
	entryLimit?: Maybe<Scalars['Int']>
	query?: Maybe<Scalars['String']>
	env?: Maybe<SitePluginPluginOptionsEnv>
	isTSX?: Maybe<Scalars['Boolean']>
	allExtensions?: Maybe<Scalars['Boolean']>
	jsxPragma?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	path?: Maybe<Scalars['String']>
	extensions?: Maybe<Array<Maybe<Scalars['String']>>>
	lessBabel?: Maybe<Scalars['Boolean']>
	mediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>
	root?: Maybe<Scalars['String']>
	base64Width?: Maybe<Scalars['Int']>
	stripMetadata?: Maybe<Scalars['Boolean']>
	defaultQuality?: Maybe<Scalars['Int']>
	failOnError?: Maybe<Scalars['Boolean']>
	_?: Maybe<Scalars['String']>
	pages?: Maybe<Scalars['String']>
	images?: Maybe<Scalars['String']>
	assets?: Maybe<Scalars['String']>
	components?: Maybe<Scalars['String']>
	types?: Maybe<Scalars['String']>
	styles?: Maybe<Scalars['String']>
	hooks?: Maybe<Scalars['String']>
	stages?: Maybe<Array<Maybe<Scalars['String']>>>
	options?: Maybe<SitePluginPluginOptionsOptions>
	offset?: Maybe<Scalars['Int']>
	siteUrl?: Maybe<Scalars['String']>
	mergeScriptHashes?: Maybe<Scalars['Boolean']>
	mergeStyleHashes?: Maybe<Scalars['Boolean']>
	directives?: Maybe<SitePluginPluginOptionsDirectives>
	headers?: Maybe<SitePluginPluginOptionsHeaders>
	mergeSecurityHeaders?: Maybe<Scalars['Boolean']>
	pathCheck?: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsDirectives = {
	__typename?: 'SitePluginPluginOptionsDirectives'
	script_src?: Maybe<Scalars['String']>
	style_src?: Maybe<Scalars['String']>
	img_src?: Maybe<Scalars['String']>
	report_uri?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsDirectivesFilterInput = {
	script_src?: Maybe<StringQueryOperatorInput>
	style_src?: Maybe<StringQueryOperatorInput>
	img_src?: Maybe<StringQueryOperatorInput>
	report_uri?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsEnv = {
	__typename?: 'SitePluginPluginOptionsEnv'
	production?: Maybe<SitePluginPluginOptionsEnvProduction>
	branch_deploy?: Maybe<SitePluginPluginOptionsEnvBranch_Deploy>
	deploy_preview?: Maybe<SitePluginPluginOptionsEnvDeploy_Preview>
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
	userAgent?: Maybe<Scalars['String']>
	disallow?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPluginOptionsEnvBranch_DeployPolicyFilterInput = {
	userAgent?: Maybe<StringQueryOperatorInput>
	disallow?: Maybe<StringQueryOperatorInput>
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
	userAgent?: Maybe<Scalars['String']>
	disallow?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPluginOptionsEnvDeploy_PreviewPolicyFilterInput = {
	userAgent?: Maybe<StringQueryOperatorInput>
	disallow?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsEnvDeploy_PreviewPolicyFilterListInput = {
	elemMatch?: Maybe<SitePluginPluginOptionsEnvDeploy_PreviewPolicyFilterInput>
}

export type SitePluginPluginOptionsEnvFilterInput = {
	production?: Maybe<SitePluginPluginOptionsEnvProductionFilterInput>
	branch_deploy?: Maybe<SitePluginPluginOptionsEnvBranch_DeployFilterInput>
	deploy_preview?: Maybe<SitePluginPluginOptionsEnvDeploy_PreviewFilterInput>
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
	excludes?: Maybe<StringQueryOperatorInput>
	output?: Maybe<StringQueryOperatorInput>
	createLinkInHead?: Maybe<BooleanQueryOperatorInput>
	entryLimit?: Maybe<IntQueryOperatorInput>
	query?: Maybe<StringQueryOperatorInput>
	env?: Maybe<SitePluginPluginOptionsEnvFilterInput>
	isTSX?: Maybe<BooleanQueryOperatorInput>
	allExtensions?: Maybe<BooleanQueryOperatorInput>
	jsxPragma?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	path?: Maybe<StringQueryOperatorInput>
	extensions?: Maybe<StringQueryOperatorInput>
	lessBabel?: Maybe<BooleanQueryOperatorInput>
	mediaTypes?: Maybe<StringQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	base64Width?: Maybe<IntQueryOperatorInput>
	stripMetadata?: Maybe<BooleanQueryOperatorInput>
	defaultQuality?: Maybe<IntQueryOperatorInput>
	failOnError?: Maybe<BooleanQueryOperatorInput>
	_?: Maybe<StringQueryOperatorInput>
	pages?: Maybe<StringQueryOperatorInput>
	images?: Maybe<StringQueryOperatorInput>
	assets?: Maybe<StringQueryOperatorInput>
	components?: Maybe<StringQueryOperatorInput>
	types?: Maybe<StringQueryOperatorInput>
	styles?: Maybe<StringQueryOperatorInput>
	hooks?: Maybe<StringQueryOperatorInput>
	stages?: Maybe<StringQueryOperatorInput>
	options?: Maybe<SitePluginPluginOptionsOptionsFilterInput>
	offset?: Maybe<IntQueryOperatorInput>
	siteUrl?: Maybe<StringQueryOperatorInput>
	mergeScriptHashes?: Maybe<BooleanQueryOperatorInput>
	mergeStyleHashes?: Maybe<BooleanQueryOperatorInput>
	directives?: Maybe<SitePluginPluginOptionsDirectivesFilterInput>
	headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>
	mergeSecurityHeaders?: Maybe<BooleanQueryOperatorInput>
	pathCheck?: Maybe<BooleanQueryOperatorInput>
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
	extensions?: Maybe<Array<Maybe<Scalars['String']>>>
	exclude?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPluginOptionsOptionsFilterInput = {
	emitWarning?: Maybe<BooleanQueryOperatorInput>
	failOnError?: Maybe<BooleanQueryOperatorInput>
	fix?: Maybe<BooleanQueryOperatorInput>
	extensions?: Maybe<StringQueryOperatorInput>
	exclude?: Maybe<StringQueryOperatorInput>
}

export type SitePluginSortInput = {
	fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
	__typename?: 'SiteSiteMetadata'
	title?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	siteUrl?: Maybe<Scalars['String']>
	image?: Maybe<Scalars['String']>
	ogLanguage?: Maybe<Scalars['String']>
	siteLanguage?: Maybe<Scalars['String']>
	lastBuildDate?: Maybe<Scalars['Date']>
	siteLocale?: Maybe<Scalars['String']>
	author?: Maybe<SiteSiteMetadataAuthor>
	social?: Maybe<SiteSiteMetadataSocial>
}

export type SiteSiteMetadataLastBuildDateArgs = {
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	difference?: Maybe<Scalars['String']>
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
	title?: Maybe<StringQueryOperatorInput>
	description?: Maybe<StringQueryOperatorInput>
	siteUrl?: Maybe<StringQueryOperatorInput>
	image?: Maybe<StringQueryOperatorInput>
	ogLanguage?: Maybe<StringQueryOperatorInput>
	siteLanguage?: Maybe<StringQueryOperatorInput>
	lastBuildDate?: Maybe<DateQueryOperatorInput>
	siteLocale?: Maybe<StringQueryOperatorInput>
	author?: Maybe<SiteSiteMetadataAuthorFilterInput>
	social?: Maybe<SiteSiteMetadataSocialFilterInput>
}

export type SiteSiteMetadataSocial = {
	__typename?: 'SiteSiteMetadataSocial'
	twitter?: Maybe<SiteSiteMetadataSocialTwitter>
	linkedin?: Maybe<SiteSiteMetadataSocialLinkedin>
	github?: Maybe<SiteSiteMetadataSocialGithub>
}

export type SiteSiteMetadataSocialFilterInput = {
	twitter?: Maybe<SiteSiteMetadataSocialTwitterFilterInput>
	linkedin?: Maybe<SiteSiteMetadataSocialLinkedinFilterInput>
	github?: Maybe<SiteSiteMetadataSocialGithubFilterInput>
}

export type SiteSiteMetadataSocialGithub = {
	__typename?: 'SiteSiteMetadataSocialGithub'
	username?: Maybe<Scalars['String']>
	url?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataSocialGithubFilterInput = {
	username?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
}

export type SiteSiteMetadataSocialLinkedin = {
	__typename?: 'SiteSiteMetadataSocialLinkedin'
	username?: Maybe<Scalars['String']>
	url?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataSocialLinkedinFilterInput = {
	username?: Maybe<StringQueryOperatorInput>
	url?: Maybe<StringQueryOperatorInput>
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
	ne?: Maybe<Scalars['String']>
	in?: Maybe<Array<Maybe<Scalars['String']>>>
	nin?: Maybe<Array<Maybe<Scalars['String']>>>
	regex?: Maybe<Scalars['String']>
	glob?: Maybe<Scalars['String']>
}

export type TransformOptions = {
	grayscale?: Maybe<Scalars['Boolean']>
	duotone?: Maybe<DuotoneGradient>
	rotate?: Maybe<Scalars['Int']>
	trim?: Maybe<Scalars['Float']>
	cropFocus?: Maybe<ImageCropFocus>
	fit?: Maybe<ImageFit>
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
