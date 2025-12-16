import { useState } from "react";

import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import {
  useCreatePostMutation,
  useDeletePostMutation,
  usePostQuery,
  usePostsQuery,
  useUpdatePostMutation,
} from "@/hooks/usePosts";

export const QueryDemo = () => {
  const [page] = useState(1);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  // Query for posts list
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = usePostsQuery({ page, limit: 10 });

  // Query for selected post
  const {
    data: selectedPost,
    isLoading: isLoadingPost,
    isError: isPostError,
  } = usePostQuery(selectedPostId || 0);

  // Mutations
  const createPostMutation = useCreatePostMutation();
  const updatePostMutation = useUpdatePostMutation();
  const deletePostMutation = useDeletePostMutation();

  const handleCreatePost = () => {
    createPostMutation.mutate(
      {
        title: "New Post from TanStack Query Demo",
        body: "This post was created using useMutation hook with automatic cache invalidation.",
        userId: 1,
      },
      {
        onSuccess: (data) => {
          setIsCreating(false);
          setSelectedPostId(data.id);
        },
      }
    );
  };

  const handleUpdatePost = (id: number) => {
    updatePostMutation.mutate({
      id,
      data: {
        title: "Updated Post Title (Optimistic Update)",
        body: "This update was made with optimistic UI updates!",
      },
    });
  };

  const handleDeletePost = (id: number) => {
    deletePostMutation.mutate(id, {
      onSuccess: () => {
        if (selectedPostId === id) {
          setSelectedPostId(null);
        }
      },
    });
  };

  return (
    <div className="flex flex-col space-y-8 py-8">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          TanStack Query Demo
        </h1>
        <p className="text-muted-foreground">
          Explore powerful data fetching, caching, and state management patterns
          with TanStack Query v5.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
          <h3 className="mb-1 text-sm font-semibold">Auto Caching</h3>
          <p className="text-xs text-muted-foreground">
            Data is cached automatically and shared across components
          </p>
        </div>
        <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
          <h3 className="mb-1 text-sm font-semibold">Optimistic Updates</h3>
          <p className="text-xs text-muted-foreground">
            UI updates immediately before server confirms
          </p>
        </div>
        <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
          <h3 className="mb-1 text-sm font-semibold">Auto Refetch</h3>
          <p className="text-xs text-muted-foreground">
            Refetch on window focus and network reconnect
          </p>
        </div>
        <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
          <h3 className="mb-1 text-sm font-semibold">Devtools</h3>
          <p className="text-xs text-muted-foreground">
            Press floating icon to inspect cache state
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Posts List */}
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Posts List</h2>
            <div className="flex gap-2">
              <Button
                onClick={() => refetch()}
                size="sm"
                variant="outline"
                disabled={isFetching}
              >
                {isFetching ? "Refetching..." : "Refetch"}
              </Button>
              <Button
                onClick={() => setIsCreating(true)}
                size="sm"
                disabled={createPostMutation.isPending}
              >
                Create Post
              </Button>
            </div>
          </div>

          {isLoading && (
            <div className="py-8 text-center text-muted-foreground">
              Loading posts...
            </div>
          )}

          {isError && (
            <div className="rounded-md border border-destructive bg-destructive/10 p-4">
              <p className="text-sm text-destructive">
                Error: {error?.message || "Failed to load posts"}
              </p>
            </div>
          )}

          {posts && (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {posts.slice(0, 10).map((post) => (
                <button
                  key={post.id}
                  onClick={() => setSelectedPostId(post.id)}
                  className={`w-full rounded-md border p-3 text-left transition-colors hover:bg-accent ${
                    selectedPostId === post.id
                      ? "border-primary bg-accent"
                      : "border-border"
                  }`}
                >
                  <h3 className="font-medium text-sm line-clamp-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {post.body}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Post Detail / Actions */}
        <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Post Actions</h2>

          {isCreating && (
            <div className="space-y-4">
              <div className="rounded-md border border-primary bg-primary/10 p-4">
                <h3 className="font-medium mb-2">Create New Post</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  This will create a new post and automatically update the cache
                </p>
                <div className="flex gap-2">
                  <Button
                    onClick={handleCreatePost}
                    disabled={createPostMutation.isPending}
                  >
                    {createPostMutation.isPending ? "Creating..." : "Confirm"}
                  </Button>
                  <Button
                    onClick={() => setIsCreating(false)}
                    variant="outline"
                    disabled={createPostMutation.isPending}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          )}

          {!isCreating && !selectedPostId && (
            <div className="py-8 text-center text-muted-foreground">
              Select a post from the list to view details and actions
            </div>
          )}

          {!isCreating && selectedPostId && (
            <div className="space-y-4">
              {isLoadingPost && (
                <div className="py-8 text-center text-muted-foreground">
                  Loading post details...
                </div>
              )}

              {isPostError && (
                <div className="rounded-md border border-destructive bg-destructive/10 p-4">
                  <p className="text-sm text-destructive">
                    Error loading post details
                  </p>
                </div>
              )}

              {selectedPost && (
                <>
                  <div className="rounded-md border bg-muted/50 p-4 space-y-2">
                    <div className="text-xs text-muted-foreground">
                      Post ID: {selectedPost.id}
                    </div>
                    <h3 className="font-semibold">{selectedPost.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedPost.body}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground">
                      Available Actions:
                    </h3>

                    <Button
                      onClick={() => handleUpdatePost(selectedPost.id)}
                      variant="outline"
                      className="w-full"
                      disabled={updatePostMutation.isPending}
                    >
                      {updatePostMutation.isPending
                        ? "Updating..."
                        : "Update Post (Optimistic)"}
                    </Button>

                    <Button
                      onClick={() => handleDeletePost(selectedPost.id)}
                      variant="destructive"
                      className="w-full"
                      disabled={deletePostMutation.isPending}
                    >
                      {deletePostMutation.isPending
                        ? "Deleting..."
                        : "Delete Post"}
                    </Button>

                    <Button
                      onClick={() => setSelectedPostId(null)}
                      variant="ghost"
                      className="w-full"
                    >
                      Clear Selection
                    </Button>
                  </div>

                  {updatePostMutation.isSuccess && (
                    <div className="rounded-md border border-green-500 bg-green-500/10 p-3">
                      <p className="text-sm text-green-700 dark:text-green-400">
                        Post updated successfully with optimistic UI!
                      </p>
                    </div>
                  )}

                  {deletePostMutation.isSuccess && (
                    <div className="rounded-md border border-green-500 bg-green-500/10 p-3">
                      <p className="text-sm text-green-700 dark:text-green-400">
                        Post deleted successfully!
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">How It Works</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <h3 className="mb-2 font-medium text-sm">Queries (useQuery)</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Automatic background refetching</li>
              <li>• Intelligent caching and deduplication</li>
              <li>• Loading and error states included</li>
              <li>• Refetch on window focus enabled</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-sm">
              Mutations (useMutation)
            </h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Optimistic UI updates</li>
              <li>• Automatic cache invalidation</li>
              <li>• Rollback on error</li>
              <li>• Success/error callbacks</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center pt-4">
        <Button variant="outline" render={<Link to="/" />}>
          ← Back to Home
        </Button>
      </div>
    </div>
  );
};
