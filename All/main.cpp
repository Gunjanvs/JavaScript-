#include <iostream>
#include <vector>
#include <string>
#include <map>
#include <queue>
using namespace std;

class Solution
{

public:
    map<string, vector<string>> adj;
    bool dfs(string src, vector<string> &result, int n)
    {
        if (result.size() == n + 1)
        {
            return true;
        }
        if (adj[src].empty())
        {
            return false;
        }
        vector<string> temp;
        temp = adj[src];
        for (auto des : adj[src])
        {
            result.push_back(des);
            auto it = find(adj[src].begin(), adj[src].end(), des);
            adj[src].erase(it);
            if (dfs(des, result, n) == true)
            {
                return true;
            }
            result.pop_back();
            adj[src] = temp;
        }
        return false;
    }
    vector<string> findItinerary(vector<vector<string>> &tickets)
    {
        int n = tickets.size();
        sort(tickets.begin(), tickets.end());
        // int n = tickets.size();
        for (const auto &ticket : tickets)
        {
            string src = ticket[0];
            string des = ticket[1];
            adj[src].push_back(des);
        }
        vector<string> result;
        result.push_back("JFK");
        dfs("JFK", result, n);
        return result;
    }
};
class Solution
{
public:
    bool dfs(int curr_room, vector<int> adj[], int &count, vector<bool> &vis)
    {
        vis[curr_room] = true;
        count++;
        if (count == vis.size())
        {
            return true;
        }
        for (int neighbor : adj[curr_room])
        {
            if (!vis[neighbor])
            {

                if (dfs(neighbor, adj, count, vis))
                {
                    return true;
                }
            }
        }

        return false;
    }

    bool canVisitAllRooms(vector<vector<int>> &rooms)
    {
        int n = rooms.size();
        vector<int> adj[n];
        vector<bool> vis(n, false);
        int count = 0;
        for (int i = 0; i < n; i++)
        {
            for (int key : rooms[i])
            {
                adj[i].push_back(key);
            }
        }
        return dfs(0, adj, count, vis);
    }
};
struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution
{
    void markparent(TreeNode *root, unordered_map<TreeNode *, TreeNode *> &parent_track, TreeNode *target)
    {
        queue<TreeNode *> q;
        q.push(root);
        while (!q.empty())
        {
            TreeNode *current = q.front();
            q.pop();
            if (current->left)
            {
                parent_track[current->left] = current;
                q.push(current->left);
            }
            if (current->right)
            {
                parent_track[current->right] = current;
                q.push(current->right);
            }
        }
    }

public:
    vector<int> distanceK(TreeNode *root, TreeNode *target, int k)
    {
        unordered_map<TreeNode *, bool> visited;
        unordered_map<TreeNode *, TreeNode *> parent_track;
        queue<TreeNode *> q;
        q.push(target);
        int curr_level = 0;
        while (!q.empty())
        {
            int size = q.size();
            for (int i = 0; i < size; i++)
            {
                TreeNode *node = q.front();
                q.pop();
                if (node->left && !visited[node->left])
                {
                    q.push({node->left});
                    visited[node->left] = true;
                }
                if (node->right && !visited[node->right])
                {
                    q.push({node->right});
                    visited[node->right] = true;
                }
                if (parent_track[node] && !visited[parent_track[node]])
                {
                    q.push(parent_track[node]);
                    visited[parent_track[node]] = true;
                }
            }
        }
    }
};
class Solution
{
    int solve(unordered_map<TreeNode *, TreeNode *> &mpp, TreeNode *target)
    {
        int time = 0;
        queue<TreeNode *> q;
        unordered_map<TreeNode *, bool> vis;
        q.push(target);
        vis[target] = true;
        while (!q.empty())
        {
            int f = 0;
            int size = q.size();
            for (int i = 0; i < size; i++)
            {
                TreeNode *node = q.front();
                q.pop();
                if (node->left && !vis[node->left])
                {
                    q.push(node->left);
                    vis[node->left] = true;
                    f = 1;
                }
                if (node->right && !vis[node->right])
                {
                    q.push(node->right);
                    vis[node->right] = true;
                    f = 1;
                }

                // if parent exit and not visited then go ahead
                if (mpp[node] && !vis[mpp[node]])
                {
                    q.push(mpp[node]);
                    vis[mpp[node]] = true;
                    f = 1;
                }
            }
            if (f)
                time++;
        }
        return time;
    }

public:
    TreeNode *mapParent(TreeNode *root, unordered_map<TreeNode *, TreeNode *> &mpp, int start)
    {
        if (!root)
            return NULL;
        queue<TreeNode *> q;
        q.push(root);
        TreeNode *res;
        while (!q.empty())
        {
            TreeNode *node = q.front();
            q.pop();
            if (node->val == start)
                res = node;
            if (root->left)
            {
                mpp[node->left] = node;
                q.push(node->left);
            }
            if (node->right)
            {
                mpp[node->right] = node;
                q.push(node->right);
            }
        }
        return res;
    }
    int amountOfTime(TreeNode *root, int start)
    {
        unordered_map<TreeNode *, TreeNode *> mpp;
        TreeNode *target = mapParent(root, mpp, start);
        int maxi = solve(mpp, target);
        return maxi;
    }
};
class Solution
{
public:
    TreeNode *build(vector<int> &preorder, int prestart, int preend, vector<int> &inorder, int instart, int inend, unordered_map<int, int> &inMap)
    {
        if (prestart > preend || instart > inend)
            return NULL;
        TreeNode *root = new TreeNode(prestart);
        int inRoot = inMap[root->val];
        int numsleft = inRoot - instart;
        root->left = build(preorder, prestart + 1, prestart + numsleft, inorder, instart, inRoot - 1, inMap);
        root->right = build(preorder, prestart + 1, prestart + numsleft, inorder, instart, inRoot - 1, inMap);
        return root;
    }
    TreeNode *buildTree(vector<int> &preorder, vector<int> &inorder)
    {
        unordered_map<int, int> inMap;
        for (int i = 0; i < preorder.size(); i++)
        {
            inMap[inorder[i]] = i;
        }
        TreeNode *root = build(preorder, 0, preorder.size() - 1, inorder, 0, inorder.size() - 1, inMap);
        return root;
    }
};
class Solution
{
public:
    int f(int row, int col, vector<vector<int>> &grid1, vector<vector<int>> &grid2, vector<vector<int>> &vis)
    {
        bool flag = false;
        vis[row][col] = 1;
        int drow[4] = {1, 0, -1, 0};
        int dcol[4] = {0, 1, 0, -1};
        for (int i = 0; i < 4; i++)
        {
            int nrow = row + drow[i];
            int ncol = col + dcol[i];
            if (nrow >= 0 && nrow < grid1.size() && ncol >= 0 && ncol < grid1[0].size() && !vis[nrow][ncol] && grid2[nrow][ncol] == 1)
            {
                if (grid1[nrow][ncol] != 1)
                    flag = true;
                else
                {
                    f(nrow, ncol, grid1, grid2, vis);
                }
            }
        }
        return (flag) ? 1 : 0;
    }
    // int countSubIslands(vector<vector<int>>& grid1, vector<vector<int>>& grid2) {
    //     int n = grid1.size();
    //     int m = grid1.size();
    //     int ans =0;
    //     vector<vector<int>> vis(n,vector<int>(m,0));
    //     for (int i = 0; i < n; i++)
    //     {
    //         for (int j = 0; j < m; j++)
    //         {
    //             if(!vis[i][j] && grid2[i][j]==1){
    //                 ans += f(i,j,grid1,grid2,vis);
    //             }
    //         }

    //     }
    //     return ans ;

    // }
    bool checkSubIsland(vector<vector<int>> &grid1, vector<vector<int>> &grid2, int row, int col)
    {
        queue<pair<int, int>> q;
        q.push({row, col});
        bool mila = true;
        if (grid1[row][col] = -1)
            mila = false;

        while (!q.empty())
        {
            int x = q.front().first;
            int y = q.front().second;
            int drow[4] = {1, 0, -1, 0};
            int dcol[4] = {0, 1, 0, -1};
            for (int i = 0; i < 4; i++)
            {
                int newX = x + drow[0];
                int newY = y + dcol[1];

                if (newX >= 0 && newX < grid1.size() && newY >= 0 && newY < grid1[0].size() && grid2[newX][newY] == 1)
                {
                    grid2[newX][newY] = -1; // mark visited
                    q.push({newX, newY});
                }
            }
        }
        return mila;
    }
    int countSubIslands(vector<vector<int>> &grid1, vector<vector<int>> &grid2)
    {
        // DFS
        int subIslands = 0;
        int m = grid2.size();    // rows
        int n = grid2[0].size(); // cols

        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (grid2[i][j] == 1 && checkSubIsland(grid1, grid2, i, j))
                { // Found an island
                    subIslands++;
                }
            }
        }

        return subIslands;
    }
};
#include <iostream>
#include <vector>

class Solution
{
public:
    int uniquePaths(std::vector<std::vector<int>> &matrix)
    {
        // Base case
        if (containsZero(matrix))
        {
            return 0;
        }

        int rows = matrix.size();
        int cols = matrix[0].size();

        // Base Case
        if (rows == 1 || cols == 1)
        {
            return 1;
        }

        int upMove = matrix[rows - 2][cols - 1] != 0 ? uniquePaths(removeLastRow(matrix)) : 0;
        int leftMove = matrix[rows - 1][cols - 2] != 0 ? uniquePaths(removeLastColumn(matrix)) : 0;

        return upMove + leftMove;
    }

private:
    bool containsZero(const std::vector<std::vector<int>> &matrix)
    {
        for (const auto &row : matrix)
        {
            for (int cell : row)
            {
                if (cell == 0)
                {
                    return true;
                }
            }
        }
        return false;
    }

    std::vector<std::vector<int>> removeLastRow(const std::vector<std::vector<int>> &matrix)
    {
        return std::vector<std::vector<int>>(matrix.begin(), matrix.end() - 1);
    }

    std::vector<std::vector<int>> removeLastColumn(const std::vector<std::vector<int>> &matrix)
    {
        std::vector<std::vector<int>> result(matrix.size(), std::vector<int>(matrix[0].size() - 1));
        for (size_t i = 0; i < matrix.size(); i++)
        {
            std::copy(matrix[i].begin(), matrix[i].end() - 1, result[i].begin());
        }
        return result;
    }
};